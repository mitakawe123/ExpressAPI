import express, { Request, Response } from "express";
import { shortenUrl } from "../src/urls/Shared/ShortenUrl";
import { Url } from "../src/urls/Schemas/UrlSchema";
const router = express.Router();

type UrlType = {
	originalUrl: string;
	shortUrl: string;
};

type CreateUrlRequest = {
	originalUrl: string;
};

type GetUrlRequest = {
	shortUrl: string;
};

router.post(
	"/shorten",
	async (req: Request<{}, {}, CreateUrlRequest>, res: Response) => {
		try {
			const { originalUrl } = req.body;
			const shortUrl = await shortenUrl(originalUrl);
			res.status(201).send(shortUrl);
		} catch {
			res.status(500).send("Failed to create short url");
		}
	}
);

router.get("/:shortUrl", async (req: Request<GetUrlRequest>, res: Response) => {
	const { shortUrl } = req.params;
	const url = await Url.findOne<UrlType>({
		shortUrl: shortUrl,
	});
	res.json(url);
});

export default router;
