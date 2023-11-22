"use client";

import React from "react";

const BooksView = ({ book }) => {
	return (
		<div className="text-[var(--eggshell)] grid bg-gray-600 rounded-md p-4 m-3 w-[31%]">
			<div className="flex flex-col">
				<h4>{book.title}</h4>
				<hr className="my-4" />
				<div className="flex mt-auto">
					<p>{book.genre}</p>
				</div>
			</div>
		</div>
	);
};

export default BooksView;
