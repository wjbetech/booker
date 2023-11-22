import Book from "../../(models)/book";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const books = await Book.find();
		return NextResponse.json({ books }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error!", error }, { status: 500 });
	}
}

export async function POST(req) {
	try {
		const body = await req.json();
		const bookData = body.newBookData;
		await Book.create(bookData);

		return NextResponse.json(
			{
				message: "Book successfully added to DB.",
				posted: true,
			},
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json({ message: "Error!", error }, { status: 500 });
	}
}
