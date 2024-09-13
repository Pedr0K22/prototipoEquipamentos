import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';
import { Button } from './components/ui/button';

interface Equipamento {
  nome: string;
  componentes: string[];
}

interface Setor {
  setor: string;
  equipamentos: Equipamento[];
}

export function App() {
  const [setores, setSetores] = useState<Setor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch dos dados da API
    axios.get('http://localhost:3001/api/setores')
      .then(response => {
        setSetores(response.data);
        setLoading(false); // Dados carregados
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setError('Erro ao carregar os dados');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto text-center py-10">
        <h2 className="text-xl font-semibold">Carregando dados...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto text-center py-10">
        <h2 className="text-xl font-semibold text-red-500">{error}</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Setores e Equipamentos da Empresa
      </h1>

      {setores.map((setor, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{setor.setor}</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
              <thead className="">
                <tr>
                  <th className="px-4 py-2 text-left font-bold">Nome do Equipamento</th>
                  <th className="px-4 py-2 text-left font-bold">ID</th>
                </tr>
              </thead>
              <tbody>
                {setor.equipamentos.map((equipamento, idxEquip) => (
                  equipamento.componentes.map((componente, idxComp) => (
                    <tr key={`${setor.setor}-${idxEquip}-${idxComp}`}>
                      <td className="border px-4 py-2">{equipamento.nome}</td>
                      <td className="border px-4 py-2">{componente}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <Button>
        <Plus className="size-4"/>
          Submmit
      </Button>
    </div>
  );
}

export default App;
