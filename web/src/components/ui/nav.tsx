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

export default function Nav() {
	return (
		<div className="flex justify-between p-5">
			<div className="font-black content-center">Titulo</div>
			<div className="menu">
				<Drawer>
					<DrawerTrigger className="bg-transparent border hover:bg-white hover:text-black transition-all p-2 rounded-lg">
						<Menu />
					</DrawerTrigger>

					<DrawerContent className="bg-zinc-950">
						<DrawerHeader>
							<DrawerTitle>O que deseja ver?</DrawerTitle>
							<DrawerDescription>Escolha aqui</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<Link>
								Teste
							</Link>

							<DrawerClose className="content-center">
								<Button>Sair</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</div>
	);
}
