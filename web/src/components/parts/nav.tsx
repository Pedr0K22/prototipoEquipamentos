import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export default function Nav() {
	return (
		<div className="container mx-auto">
			<nav className="flex justify-between p-5">
				<div className="content-center">Logo</div>
				<div>
					<Button>
						<Menu />
					</Button>
				</div>
			</nav>

			<div className="m-5 border-solid border-white rounded-xl border">
				<table className="table-auto hover:table-auto ">
					<thead>
						<tr>
							<th>Song</th>
							<th>Artist</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody>
						<tr className="hover:bg-slate-500">
							<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
							<td>Malcolm Lockyer</td>
							<td>1961</td>
						</tr>
						<tr className="hover:bg-slate-500">
							<td>Witchy Woman</td>
							<td>The Eagles</td>
							<td>1972</td>
						</tr>
						<tr className="hover:bg-slate-500">
							<td>Shining Star</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
