// src/pages/Login.tsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Hook para redirecionamento
import { Button } from "../components/ui/button";
import '../index.css';

interface LoginResponse {
  token: string;
}

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post<LoginResponse>('http://localhost:3001/login', {
        username,
        password,
      });

      localStorage.setItem('token', response.data.token);
      setSuccess(true);
      navigate("/dashboard"); // Redirecionar para a página de Dashboard
    } catch (error) {
      console.error('Você não está autorizado.', error);
      setError('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-700 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Entrar</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Login bem-sucedido!</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-black">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-black">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded text-black"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
