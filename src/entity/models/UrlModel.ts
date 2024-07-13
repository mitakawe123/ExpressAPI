import mongoose, { Schema } from "mongoose";
import { IUrl } from "../interfaces/IUrl.interface";

const UrlSchema: Schema<IUrl> = new Schema(
	{
		originalUrl: { type: String, required: true },
		shortenUrl: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const urlModel = mongoose.model("Url", UrlSchema);
export default urlModel;
