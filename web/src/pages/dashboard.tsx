//Rota para nossa codificação

import { useEffect, useState } from "react";
import axios from "axios";
 
export function Dashboard() {
    const [ data, setData ] = useState<any[]>([]);
    const [ error, setError ] = useState<string | null>(null);

    //função de busca do back-end

    const fetchData = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError("token não encontrado"); 
            return;
        }
    
        try {
            const response = await axios.get('http://localhost:3001/api/setores', {
                headers: {Authorization: `Bearer ${token}` }, 
            });
            setData(response.data);
        } catch (error) {
            console.error('erro; ao buscar dados do backend:', error);
            setError('Erro ao carregar dados');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-6">Setores e Equipamentos</h2>
    
          {data.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            data.map((setor, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{setor.setor}</h3>
                <ul className="list-disc ml-6">
                  {setor.equipamentos.map((equipamento: any, i: number) => (
                    <li key={i}>{equipamento.nome}</li>
                  ))}
                </ul>
              </div>
            ))
        )}
        </div>
    );
}

export default Dashboard;
