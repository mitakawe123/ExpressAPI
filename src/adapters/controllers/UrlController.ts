import { Request, Response } from "express";
import { IShortenUrlCommand } from "../../entity/interfaces/IShortenUrlCommand.inteface";

type CreateUrlRequest = {
	originalUrl: string;
};

class UrlController {
	private readonly shortenUrlCommand: IShortenUrlCommand;

	constructor(shortenUrlCommand: IShortenUrlCommand) {
		this.shortenUrlCommand = shortenUrlCommand;
	}

	async shorten(req: Request<{}, {}, CreateUrlRequest>, res: Response) {
		const { originalUrl } = req.body;
		try {
			await this.shortenUrlCommand.execute(originalUrl);
			res.status(201).send("Url shorten successfully.");
		} catch (error) {
			res.status(500).send("An error occurred while creating the short url.");
		}
	}
}

export default UrlController;
