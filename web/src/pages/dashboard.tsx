// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import LayoutDashboard from "../layouts/dashboard";
import { Button } from "../components/ui/button";

// Interfaces para tipagem dos dados

interface Setor {
	id: bigint;
	name: string;
	// equipamentos: Equipamento[];
}

export function Dashboard() {
	const [data, setData] = useState<Setor[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
				setError("token não encontrado");
				return;
			}

			try {
				const response = await axios.get<Setor[]>(
					"http://localhost:3001/api/setores",
					{
						headers: { Authorization: `Bearer ${token}` },
					},
				);
				console.log(response.data);
				setData(response.data);
			} catch (error) {
				console.error("Erro ao buscar dados do backend:", error);
				setError("Erro ao carregar dados");
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <p className="text-red-500">{error}</p>;
	}

	return (
		<LayoutDashboard title="Setores">
			<div className="container mx-auto">
				{data.length === 0 ? (
					<p className="text-center">Carregando...</p>
				) : (
					<div className="grid gap-4 grid-cols-2">
						{data.map((setor) => (
							<Button key={setor.id} className="">{setor.name}</Button>
						))}
					</div>
				)}
			</div>
		</LayoutDashboard>

	);
}

export default Dashboard;
