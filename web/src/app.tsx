// src/App.tsx
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { Teste } from "./pages/teste";
// import { Teste } from "./pages/teste";

// Função para verificar se o token JWT está no localStorage
const isAuthenticated = () => !!localStorage.getItem("token");

// Rota protegida
function ProtectedRoute({ children }: { children: JSX.Element }) {
	return isAuthenticated() ? children : <Navigate to="/" />; // Redireciona para login se não autenticado
}

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} /> {/* Página de Login */}
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>{" "}

				{/* Página de Dashboard protegida */}

				<Route path="/teste" element={<Teste />} />
			</Routes>
		</Router>
	);
}
