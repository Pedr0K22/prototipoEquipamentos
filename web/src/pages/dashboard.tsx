// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import Setores from "./setores";


// Interfaces para tipagem dos dados
// interface Equipamento {
//   nome: string;
//   componentes: string[];
// }

interface Setor {
  id: bigint;
  nome: string;
  // equipamentos: Equipamento[];
}

export function Dashboard() {
  const [data, setData] = useState<Setor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError("token não encontrado"); 
        return;
      }

      try {
        const response = await axios.get<Setor[]>('http://localhost:3001/api/setores', {
          headers: { Authorization: `Bearer ${token}` }, 
        });
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
        setError('Erro ao carregar dados');
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    window.location.reload(); // Recarrega a página
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Setores e Equipamentos</h2>
      <Setores></Setores>
      {data.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        data.map((setor) => (
          <div key={setor.id} className="mb-4">
            <h3 className="text-xl font-semibold">{setor.nome}</h3>
            {/* <ul className="list-disc ml-6">
              {setor.equipamentos.map((equipamento: Equipamento) => (
                <li key={equipamento.nome}>{equipamento.nome}</li>
              ))}
            </ul> */}
          </div>
        ))
      )}

      <ul className="mt-6">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <li className="cursor-pointer hover:bg-gray-700 p-2 rounded" onClick={handleLogout}>Logout</li>
        {/* Adicione mais opções aqui */}
      </ul>
    </div>
  );
}

export default Dashboard;

