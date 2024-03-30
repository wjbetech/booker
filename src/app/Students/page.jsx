import React from "react";
// import StudentsView from "../(components)/StudentsView";

const getStudents = async () => {
	try {
		const students = await fetch("http://localhost:3000/api/Students", {
			cache: "no-store",
		});
		return students.json();
	} catch (error) {
		console.log("Could not retrieve students!", error);
	}
};

const StudentsPage = () => {

  const { students } = getStudents();
  console.log(students);

	return (
		<div className="p-10">
			<h1 className="text-[var(--eggshell)] pl-5 pb-5">Students</h1>
      <div className="flex flex-wrap w-[90%]">

			</div>
		</div>
	);
};

export default StudentsPage;
