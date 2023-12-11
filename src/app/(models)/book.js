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

const bookSchema = new Schema(
	{
		title: String,
		ISBN: String,
		author: String,
		publicationYear: Number,
		imageUrl: String,
		genre: String,
		onLoan: Boolean,
	},
	{
		timestamps: true,
	},
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
