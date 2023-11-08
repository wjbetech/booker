import React from "react";
import BooksView from "../(components)/BooksView";

const BooksPage = () => {
	return (
		<div>
			<h1 className="text-[var(--eggshell)]">
				Books
			</h1>
			<BooksView />
		</div>
	);
};

export default BooksPage;
