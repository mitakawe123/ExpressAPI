import { IShortenUrlCommand } from "../entity/IShortenUrlCommand";
import { IUrlRepository } from "../entity/IUrlRepository";

class ShortenUrlCommand implements IShortenUrlCommand {
	private readonly urlRepository: IUrlRepository;

	constructor(urlRepository: IUrlRepository) {
		this.urlRepository = urlRepository;
	}

	async execute(originalUrl: string): Promise<void> {
		throw new Error("Method not implemented.");
	}
}
