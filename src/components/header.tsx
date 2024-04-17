import Image from "next/image";
import Link from "next/link";
import { BiSolidGroup } from "react-icons/bi"


export default function Header() {
	return (
		<div className="fixed top-0 left-0 right-0 z-10 bg-slate-500 lg:px-16 px-4 py-5 flex justify-between items-center">
			<div >
				<Link href="./specialist">
					<h1 className="text-white font-semibold  hover:underline transition-all">Specialist</h1>
				</Link>
			</div>
			<div className="flex items-center justify-center gap-5">
				<Link href="./" className="flex items-center font-semibold text-white  hover:underline transition-all">
					Main Page
				</Link>
				<Link href="./dogs" className="flex items-center font-semibold text-white  hover:underline transition-all">
					Dogs
				</Link>
				<Link href="./view" className="flex items-center font-semibold text-white  hover:underline transition-all">
					Posts
				</Link>
			</div>
		</div>
	);
}