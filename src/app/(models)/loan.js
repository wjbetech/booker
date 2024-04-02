import mongoose, { Schema } from "mongoose";

// Check if there is an existing connection before attempting to connect again
if (mongoose.connection.readyState !== 1) {
	mongoose.connect(process.env.MONGODB_CONNECT);
	mongoose.Promise = global.Promise;

	mongoose.connection.on("connected", () => {
		console.log("Connected to MongoDB");
	});

	mongoose.connection.on("error", (err) => {
		console.error("Error connecting to MongoDB:", err);
	});
}

const getDefaultDueDate = () => {
  const twoWeeksInMilliseconds = 14 * 24 * 60 * 60 * 1000;
  return new Date(Date.now() + twoWeeksInMilliseconds);
};

const loanSchema = new Schema({
  book: { type: Types.ObjectId, ref: "Book" },
  student: { type: Types.ObjectId, ref: "Student" },
  dueDate: { type: Date, default: getDefaultDueDate },
  returned: { type: Boolean, default: false }
});

const Loan = mongoose.models.Loan || mongoose.model("Loan", loanSchema);

export default Loan;
