"use client";

import React, { useState } from "react";
import Image from "next/image";

const BooksView = ({ book }) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	return (
		<div className="text-[var(--eggshell)] bg-gray-600 rounded-md p-4 m-3 md:w-[48%] lg:w-[31%] shadow-lg shadow-gray-700">
			<h4 className="text-xl font-semibold mt-2 h-[85px]">{book.title}</h4>

			{imageError ? (
				<p className="mb-6 font-extrabold italic">Image could not be loaded.</p>
			) : (
				<Image
					width={250}
					height={250}
					src={book.imageUrl}
					alt={`${book.title} Cover`}
					className="mb-6 object-contain rounded-md shadow-lg shadow-black mx-auto"
					onError={handleImageError}
				/>
			)}

			<div className="flex flex-col mt-14">
				<p className="text-gray-300 mb-2">Author: {book.author}</p>
				<p className="text-gray-300 mb-2">ISBN: {book.ISBN}</p>
				<p className="text-gray-300 mb-2">Year: {book.publicationYear}</p>
				<p className="text-gray-300 mb-2">Genre: {book.genre}</p>
				<p className="text-gray-300 mb-2">
					On Loan: {book.onLoan ? "Yes" : "No"}
				</p>
			</div>
		</div>
	);
};

export default BooksView;
