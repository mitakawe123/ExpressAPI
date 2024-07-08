import { nanoid } from "nanoid";
import { Url } from "../Schemas/UrlSchema";

export const shortenUrl = async (originalUrl: string): Promise<string> => {
	// Generate a unique short code
	const shortUrl = nanoid(8);

	// Create a new URL entry
	const url = new Url({ originalUrl, shortUrl });

	// Save to the database
	await url.save();

	return shortUrl;
};
