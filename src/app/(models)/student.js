import mongoose, { Schema, model } from "mongoose";

const connectToMongo = () => {
	if (mongoose.connection.readyState !== 1) {
		mongoose.connect(process.env.MONGODB_CONNECT);

		mongoose.connection.on("connected", () => {
			console.log("Connected to MongoDB");
		});

		mongoose.connection.on("error", (err) => {
			console.error("Error connecting to MongoDB:", err);
		});
	}
};

// This function initializes the Student model with the provided schema
const initStudentModel = () => {
	const studentSchema = new Schema({
		name: String,
		age: Number,
		schoolYear: Number,
		class: String || Number,
		teacher: String,
		booksOnLoan: Array,
	});

	return model("Student", studentSchema);
};

connectToMongo(); // Ensure connection is established

const Student = mongoose.models.Student || initStudentModel();

export default Student;
