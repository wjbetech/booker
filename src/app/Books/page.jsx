import React from "react";
import BooksView from "../(components)/BooksView";

const getBooks = async () => {
	try {
		const books = await fetch("http://localhost:3000/api/Books", {
			cache: "no-store",
		});
		return books.json();
	} catch (error) {
		console.log("Could not retrieve books!", error);
	}
};

const BooksPage = async () => {
	// fetch books via api using getBooks()
	const { books } = await getBooks();

	return (
		<div className="p-10">
			<h1 className="text-[var(--eggshell)] pl-5 pb-5">Books</h1>
			<div className="flex flex-wrap w-[90%]">
				{books.map((book) => (
					<BooksView key={book.ISBN} book={book} />
				))}
			</div>
		</div>
	);
};

export default BooksPage;
