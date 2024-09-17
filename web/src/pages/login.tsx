// Acesso ao APP
import { useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import '../index.css';

// definindo o tipo da resposta de login
interface LoginResponse {
  token: string;
}

// Login do Usuário
export function Login(){
  const [ username, setUsername ] = useState ('');
  const [ password, setPassword ] = useState ('');
  const [ error, setError ] = useState<string | null>(null);
  const [ success, setSuccess ] = useState (false);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      // Especificar que a resposta será do tipo LoginResponse
      const response = await axios.post<LoginResponse>('http://localhost:3001/login', {
        username,
        password,
      }); 
      
      // Agora o TypeScript sabe que response.data.token existe
      localStorage.setItem('token', response.data.token);
      setSuccess(true);
    } catch (error) {
      console.error('Você não está autorizado.', error);
      setError('Usuário ou senha incorretos.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-700 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Login bem-sucedido!</p>}

        <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-black">Usuário</label>
          <input
            type="text"
            id="username" // O ID aqui associa o input ao label
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-black">Senha</label>
          <input
            type="password"
            id="password" // O ID aqui associa o input ao label
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
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
