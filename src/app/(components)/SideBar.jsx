// page setup
import React from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

// icons
import { AiOutlineHome } from "react-icons/ai";
import { PiStudentDuotone } from "react-icons/pi";
import { PiBooksLight } from "react-icons/pi";
import { FiCornerUpRight } from "react-icons/fi";

const playfair = Playfair_Display({
	subsets: ["latin"],
});

const Sidebar = () => {
	return (
		<div className="w-[275px] min-w-[250px] p-6 border-r-2 border-slate-400 h-full flex-col hidden lg:flex">
			<h2
				className={`text-[var(--eggshell)] ${playfair.className} mb-8 mt-4 pl-2`}
			>
				Menu
			</h2>
			<ul className="text-[var(--eggshell)] flex flex-col gap-4">
				<li className="hover:bg-slate-500 px-4 py-1 rounded-full w-[75%] hover:cursor-pointer flex gap-4 items-center">
					<AiOutlineHome
						size={20}
						className=""
					/>{" "}
					Home
				</li>
				<Link href="/Students">
					<li className="hover:bg-slate-500 px-4 py-1 rounded-full w-[75%] hover:cursor-pointer flex gap-4 items-center">
						<PiStudentDuotone
							size={20}
							className=""
						/>{" "}
						Students
					</li>
				</Link>
				<Link href="/Books">
					<li className="hover:bg-slate-500 px-4 py-1 rounded-full w-[75%] hover:cursor-pointer flex gap-4 items-center">
						<PiBooksLight
							size={20}
							className=""
						/>{" "}
						Books
					</li>
				</Link>
				<Link href="/Loans">
					<li className="hover:bg-slate-500 px-4 py-1 rounded-full w-[75%] hover:cursor-pointer flex gap-4 items-center">
						<FiCornerUpRight
							size={20}
							className=""
						/>{" "}
						On Loan
					</li>
				</Link>
			</ul>
			<div className="mt-auto mx-auto text-[var(--eggshell)]">
				<span className="justify-end flex text-center">
					design and concept by @wjbetech
				</span>
			</div>
		</div>
	);
};

export default Sidebar;
