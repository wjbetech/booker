import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECT);
mongoose.Promise = global.Promise;

const bookSchema = new Schema({
	title: String,
	ISBN: String,
	author: String,
	publicationYear: Number,
	cover: String,
	genre: String,
	onLoan: Boolean,
});

const Book =
	mongoose.models.Book ||
	mongoose.model("Book", bookSchema);

export default Book;
