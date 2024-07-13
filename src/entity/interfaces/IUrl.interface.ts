import { Document } from "mongoose";

export interface IUrl extends Document {
	originalUrl: string;
	shortenUrl: string;
}
