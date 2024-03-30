"use client"

import { React, useState } from "react";

const StudentsView = ({ student }) => {

	return (
		<div className="text-[var(--eggshell)] bg-gray-600 rounded-md p-4 m-3 md:w-[48%] lg:w-[31%] shadow-lg shadow-gray-700">
			<h4 className="text-xl font-semibold mt-2 h-[85px]">{student.name}</h4>
			<div className="flex flex-col mt-14">
				<p className="text-gray-300 mb-2">Name: {student.name}</p>
				<p className="text-gray-300 mb-2">Age: {student.age}</p>
				<p className="text-gray-300 mb-2">Class: {student.class}</p>
				<p className="text-gray-300 mb-2">Teacher: {student.teacher}</p>
			</div>
		</div>
	);
};

export default StudentsView;
