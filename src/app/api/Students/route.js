import Student from "../../(models)/student";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const students = await Student.find();
		return NextResponse.json({ students }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error!", error }, { status: 500 });
	}
}

export async function POST(req) {
	try {
		const student = await req.json();
		const studentData = body.newStudentData;
		await Student.create(studentData);

		return NextResponse.json(
			{
				message: "Student successfully added to DB.",
				posted: true,
			},
			{ status: 201 },
		);
	} catch (error) {
		return NextResponse.json({ message: "Error!", error }, { status: 500 });
	}
}