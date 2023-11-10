"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
	subsets: ["latin"],
});

const AddStudentForm = () => {
	const router = useRouter();

	const startingStudentData = {
		name: "",
		age: 6,
		schoolYear: 1,
		class: "",
		teacher: "",
		booksOnLoan: [],
	};

	const [newStudentData, setNewStudentData] =
		useState(startingStudentData);

	const handleChange = (e) => {
		e.preventDefault();
		const value = e.target.value;
		const name = e.target.name;
		setNewStudentData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch("/api/Students", {
				method: "POST",
				body: JSON.stringify({ newStudentData }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!res.ok) {
				throw new Error(
					"Failed to add student to student list."
				);
			}

			const data = await res.json();
			console.log("Response data:", data); // Log the response data for debugging

			setNewStudentData(startingStudentData);
			router.refresh();
			router.push("/AddStudent");
		} catch (error) {
			console.error("Error:", error); // Log any errors for debugging
		}
	};

	return (
		<div className="flex flex-col mt-10 mx-auto sm:mx-auto text-[var(--eggshell)] items-left justify-center">
			<h1
				className={`${playfair.className} text-center mt-10 mb-10`}
			>
				Add a Student
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
							Name:
						</label>
						<input
							name="name"
							type="text"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newStudentData.name}
							required
						/>
					</div>
					{/* ISBN Code */}
					<div className="flex items-center  gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							Age:
						</label>
						<input
							name="age"
							type="text"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newStudentData.age}
							required
						/>
					</div>
					{/* author */}
					<div className="flex items-center gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							School Year:
						</label>
						<input
							name="schoolYear"
							type="text"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newStudentData.schoolYear}
							required
						/>
					</div>
					{/* year of publication */}
					<div className="flex items-center gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							Class:
						</label>
						<input
							name="class"
							type="string"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newStudentData.class}
						/>
					</div>
					{/* cover */}
					<div className="flex items-center gap-3">
						<label
							htmlFor=""
							className="text-[var(--eggshell)]"
						>
							Teacher:
						</label>
						<select
							name="teacher"
							className="w-[200px] sm:w-[300px] px-2 py-1 ml-auto"
							onChange={handleChange}
							value={newStudentData.teacher}
						>
							<option value="Mr William">
								Mr William
							</option>
							<option value="Mr Austin">
								Mr Austin
							</option>
							<option value="Ms Angie">
								Ms Angie
							</option>
							<option value="Ms Jessica">
								Ms Jessica
							</option>
						</select>
					</div>
					{/* genre */}
					<input
						type="submit"
						className="mt-4 w-full py-2 px-4 bg-green-700 cursor-pointer hover:scale-[102%] transition-all ease-in-out text-[var(--eggshell)]"
						value="Add Student"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddStudentForm;
