import { Menu } from "lucide-react";
import { Button } from "./button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./drawer";
import Link from "./link";

interface NavProps {
	title: string;
}

export default function Nav({ title }: NavProps) {
	const handleLogout = () => {
		localStorage.removeItem("token"); // Remove o token do localStorage
		window.location.reload(); // Recarrega a página
	};
	return (
		<div className="flex justify-between p-5">
			<div className="font-black content-center">{title}</div>
			<div className="menu">
				<Drawer>
					<DrawerTrigger className="bg-transparent border hover:bg-white hover:text-black transition-all p-2 rounded-lg">
						<Menu />
					</DrawerTrigger>

					<DrawerContent className="bg-zinc-950">
						<DrawerHeader>
							<DrawerTitle className="text-center">
								O que deseja ver?
							</DrawerTitle>
							<DrawerDescription className="text-center">
								Escolha aqui
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter className="justify-center">
							
							<Link
								className="text-center cursor-pointer hover:bg-gray-700 p-2 rounded" 
								onClick={handleLogout}>
								Sair
							</Link>

					

							<DrawerClose>Cancelar</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</div>
	);
}
