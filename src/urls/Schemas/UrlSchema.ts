import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
	originalUrl: { type: String, required: true },
	shortUrl: { type: String, required: true },
});

export const Url = mongoose.model("Url", urlSchema);
