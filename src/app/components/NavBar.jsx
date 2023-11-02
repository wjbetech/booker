import { Playfair } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import React from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { FiCornerUpRight } from "react-icons/fi";

const playfair = Playfair_Display({
	subsets: ["latin"],
});

const NavBar = () => {
	return (
		<nav
			className="flex justify-between p-4 items-center"
			style={{
				backgroundColor: "var(--navy)",
				color: "var(--eggshell)",
			}}
		>
			{/* left side clickable logo */}
			<Link href="/">
				<h1 className={playfair.className}>
					Booker
				</h1>
			</Link>

			{/* search bar middle */}
			<div className="flex w-[25%] ml-20">
				<input
					type="text"
					placeholder="Find a book, student.."
					className="bg-gray-700 py-2 px-4 w-full rounded-full outline-none text-gray-300"
				/>
			</div>

			{/* right side buttons */}
			<div className="flex mr-4 mt-2">
				<div className="flex flex-col items-center border-r-2 px-6 border-slate-600">
					<BsPersonPlus size={24} />
					<h5>Add Child</h5>
				</div>
				<div className="flex flex-col items-center border-r-2 px-6 border-slate-600">
					<BiBookAdd size={24} />
					<h5>Add Book</h5>
				</div>
				<div className="flex flex-col items-center pl-6">
					<FiCornerUpRight size={24} />
					<h5>Loan Book</h5>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

// "bg-[var(--success)]"
