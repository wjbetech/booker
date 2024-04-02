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

const StudentsPage = async () => {

  const { students } = await getStudents();
  console.log(students);

	return (
		<div className="p-10">
			<h1 className="text-[var(--eggshell)] pl-5 pb-5">Students</h1>
      <div className="flex flex-wrap w-[90%]">
        {students.map((student) => (
          <div className="text-[var(--eggshell)] grid grid-flow-row w-[32%] m-auto text-center p-4" key={student.name}>
            <h3>{student.name}</h3>
            <span>{student.age}</span>
            <p>Class: {student.class}</p>
            <p>Teacher: {student.teacher}</p>
          </div>
        ))}
			</div>
		</div>
	);
};

export default StudentsPage;
