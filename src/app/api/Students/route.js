import Student from "@/app/(models)/student";
import { NextResponse } from "next/server";

export async function GET(req) {
	try {
		const data = await Student.find();
		console.log(data);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error!", error },
			{ status: 500 }
		);
	}
}

export async function POST(req) {
	try {
		const body = await req.json();
		const studentData = body.newStudentData;
		await Student.create(studentData);

		return NextResponse.json(
			{
				message:
					"Student successfully added to DB.",
				posted: true,
			},
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Error!", error },
			{ status: 500 }
		);
	}
}
