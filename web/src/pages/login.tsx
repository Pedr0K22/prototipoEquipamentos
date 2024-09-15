// Acesso ao APP
import React, { useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";

// Login do Usuário
export function Login(){
const [ username, setUsername ] = useState ('');
const [ password, setPassword ] = useState ('');
const [ error, setError ] = useState<string | null>(null);
const [ success, setSucess ] = useState (false);

const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    
    try {
        const response = await axios.post('http://localhost:3001/login', {
            username,
            password,
        }); 
        
        //localStorage.setItem('token', response.data.token);
        setSucess(true);
    } catch (error) {
        console.error('Voce não esta autorizado.', error);
        setError('Usuário ou senha incorreta.');
    }
};

return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Login bem-sucedido!</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Usuário</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );

}
export default Login;