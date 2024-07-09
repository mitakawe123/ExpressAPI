import mongoose from "mongoose";
import { IMongo } from "./IMongo";

class Mongo implements IMongo {
	init(): void {
		mongoose.connect("mongodb://localhost/UrlShort", { autoIndex: true });

		const db = mongoose.connection;

		db.on("error", console.error.bind(console, "MongoDB connection error:"));
		db.once("open", () => console.log("Connected to MongoDB"));
	}

	save(): void {
		throw new Error("Method not implemented.");
	}

	findOne(): void {
		throw new Error("Method not implemented.");
	}
}
