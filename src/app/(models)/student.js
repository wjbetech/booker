import mongoose, { Schema } from "mongoose";

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

const studentSchema = new Schema({
		name: String,
		age: Number,
		schoolYear: Number,
		class: String || Number,
		teacher: String,
		booksOnLoan: { type: [String], default: "none" }
});


connectToMongo(); // Ensure connection is established

const Student = mongoose.models.Student || studentSchema();

export default Student;
