import Student from "../(models)/student";
import { NextResponse } from "next/server";

// add a student to mongoDB collection
export async function POST(req) {
	try {
		// gather data
		const body = await req.json();
		const studentData = body.formData;

		// create our student from the data
		await Student.create(studentData);

		// if successful, return success status
		return NextResponse.json(
			{ message: "Student added to database" },
			{ status: 201 }
		);
	} catch (error) {
		// sanitize errors
		return NextResponse.json(
			{
				message: "Student could not be added",
				error,
			},
			{ status: 500 }
		);
	}
}
