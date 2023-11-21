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
			className="flex justify-between py-3 pl-8 pr-2 items-center border-b-2 border-slate-400 h-[100px]"
			style={{
				backgroundColor: "var(--navy)",
				color: "var(--eggshell)",
			}}
		>
			{/* left side clickable logo */}
			<div className="flex w-full justify-between lg:w-[400px] pr-6 gap-4">
				<h1 className={playfair.className}>
					<Link className={playfair.className} href="/">
						Booker
					</Link>
				</h1>
				<div className="ml-10 mt-2 items-center justify-end w-full hidden sm:flex">
					<input
						type="text"
						placeholder="Find a book, student.."
						className="px-4 rounded-full min-w-[300px] lg:min-w-[400px] outline-none text-gray-800 bg-gray-300 h-10"
					/>
				</div>
			</div>

			{/* search bar middle */}

			{/* right side buttons */}
			<div className="mr-4 mt-2 hidden lg:flex ">
				<Link href="/AddStudent">
					<div className="flex flex-col items-center border-r-2 px-6 py-2 border-slate-600 hover:bg-slate-500 hover:cursor-pointer gap-2">
						<BsPersonPlus size={24} />
						<h5>Add Student</h5>
					</div>
				</Link>
				<Link href="/AddBook">
					<div className="flex flex-col items-center border-r-2 px-6 py-2 border-slate-600 hover:bg-slate-500 hover:cursor-pointer gap-2">
						<BiBookAdd size={24} />
						<h5>Add Book</h5>
					</div>
				</Link>
				<Link href="/LoanBook">
					<div className="flex flex-col items-center pl-6 py-2 hover:bg-slate-500 hover:cursor-pointer pr-6 gap-2">
						<FiCornerUpRight size={24} />
						<h5>Loan Book</h5>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
