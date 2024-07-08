import mongoose from "mongoose";

const ConnectMongo = () => {
	mongoose.connect("mongodb://localhost/UrlShort", { autoIndex: true });

	const db = mongoose.connection;

	db.on("error", console.error.bind(console, "MongoDB connection error:"));
	db.once("open", () => console.log("Connected to MongoDB"));
};

export default ConnectMongo;
