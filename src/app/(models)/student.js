import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECT);
mongoose.Promise = global.Promise;

const studentSchema = new Schema({
	name: String,
	age: Number,
	schoolYear: Number,
	class: String || Number,
	teacher: String,
	booksOnLoan: Array,
});

const Student =
	mongoose.models.Student ||
	mongoose.model("Student", studentSchema);

export default Student;
