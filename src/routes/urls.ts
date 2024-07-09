import express, { Request, Response } from "express";
const router = express.Router();

type GetUrlRequest = {
	shortUrl: string;
};

router.post(
	"/shorten",
	async (req: Request, res: Response) => {
		const { originalUrl } = req.body;
	}
);

router.get("/:shortUrl", async (req: Request<GetUrlRequest>, res: Response) => {
	const { shortUrl } = req.params;
});

export default router;
