"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
	subsets: ["latin"],
});

const AddBookForm = () => {
	const router = useRouter();

	const bookAddedToast = () =>
		toast("Book added to library.");

	const startingBookData = {
		title: "",
		ISBN: "",
		author: "",
		publicationYear: "",
		imageUrl: "",
		genre: "",
	};

	const [newBookData, setNewBookData] = useState(
		startingBookData
	);

	const handleChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		const name = e.target.name;
		setNewBookData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch("/api/Books", {
				method: "POST",
				body: JSON.stringify({ newBookData }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!res.ok) {
				throw new Error(
					"Failed to add book to library"
				);
			}

			const data = await res.json();
			console.log("Response data:", data); // Log the response data for debugging

			if (data.posted) {
				bookAddedToast();
			} else {
				throw new Error(
					"Failed to add book to library"
				);
			}

			setNewBookData(startingBookData);
			router.refresh();
			router.push("/AddBook");
		} catch (error) {
			console.error("Error:", error); // Log any errors for debugging
		}
	};

	return (
		<div className="flex flex-col mt-10 mx-auto sm:mx-auto text-[var(--eggshell)] items-left justify-center">
			<h1
				className={`${playfair.className} text-center mt-10 mb-10`}
			>
				Add a Book
			</h1>
			<form
				className="w-[50%] text-gray-700"
				method="post"
				onSubmit={handleSubmit}
			>
				{/* book title */}
				<div className="flex flex-col gap-4 w-[375px] sm:w-[500px]">
					<div className="flex items-center">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							Title:
						</label>
						<input
							name="title"
							type="text"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newBookData.title}
							required
						/>
					</div>
					{/* ISBN Code */}
					<div className="flex items-center  gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							ISBN:
						</label>
						<input
							name="ISBN"
							type="text"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newBookData.ISBN}
							required
						/>
					</div>
					{/* author */}
					<div className="flex items-center gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							Author:
						</label>
						<input
							name="author"
							type="text"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newBookData.author}
							required
						/>
					</div>
					{/* year of publication */}
					<div className="flex items-center gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							Publication Year:
						</label>
						<input
							name="publicationYear"
							type="string"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newBookData.publicationYear}
							required
						/>
					</div>
					{/* cover */}
					<div className="flex items-center gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							Cover Image (URL):
						</label>
						<input
							name="imageUrl"
							type="string"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newBookData.imageUrl}
						/>
					</div>
					{/* genre */}
					<div className="flex items-center gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							Genre:
						</label>
						<input
							name="genre"
							type="text"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newBookData.genre}
							required
						/>
					</div>
					<input
						type="submit"
						className="mt-4 w-full py-2 px-4 bg-green-700 cursor-pointer hover:scale-[102%] transition-all ease-in-out text-[var(--eggshell)]"
						value="Add Book"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddBookForm;
