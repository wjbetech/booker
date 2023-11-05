"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
	subsets: ["latin"],
});

const AddBookForm = () => {
	const startingBookData = {
		title: "",
		ISBN: "",
		author: "",
		publicationYear: 0,
		imageUrl: "",
		genre: "",
	};

	const [newBookData, setNewBookData] = useState(
		startingBookData
	);

	const handleChange = (e) => {
		e.preventDefault;
		const value = e.target.value;
		const name = e.target.name;
		setNewBookData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="flex flex-col mt-20 mx-auto sm:mx-[150px] md:mx-auto text-[var(--eggshell)] items-left justify-center">
			<h1
				className={`${playfair.className} text-center mt-10 mb-20`}
			>
				Add a Book
			</h1>
			<form className="w-[50%]">
				{/* book title */}
				<div className="flex flex-col gap-4 w-[375px] sm:w-[500px]">
					<div className="flex">
						<label htmlFor="">Title:</label>
						<input
							type="text"
							className="w-[200px] md:w-[350px] ml-auto"
						/>
					</div>
					{/* ISBN Code */}
					<div className="flex gap-3">
						<label htmlFor="">ISBN:</label>
						<input
							type="text"
							className="w-[200px] md:w-[350px] ml-auto"
						/>
					</div>
					{/* author */}
					<div className="flex gap-3">
						<label htmlFor="">Author:</label>
						<input
							type="text"
							className="w-[200px] md:w-[350px] ml-auto"
						/>
					</div>
					{/* year of publication */}
					<div className="flex gap-3">
						<label htmlFor="">
							Publication Year:
						</label>
						<input
							type="string"
							className="w-[200px] md:w-[350px] ml-auto"
						/>
					</div>
					{/* cover */}
					<div className="flex gap-3">
						<label htmlFor="">
							Cover Image (URL):
						</label>
						<input
							type="string"
							className="w-[200px] md:w-[350px] ml-auto"
						/>
					</div>
					{/* genre */}
					<div className="flex gap-3">
						<label htmlFor="">Genre:</label>
						<input
							type="text"
							className="w-[200px] md:w-[350px] ml-auto"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddBookForm;
