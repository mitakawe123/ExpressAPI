import { IShortenUrlCommand } from "../entity/interfaces/IShortenUrlCommand.inteface";
import { IUrlRepository } from "../entity/interfaces/IUrlRepository.interface";

class ShortenUrlCommand implements IShortenUrlCommand {
	private readonly urlRepository: IUrlRepository;

	constructor(urlRepository: IUrlRepository) {
		this.urlRepository = urlRepository;
	}

	async execute(originalUrl: string): Promise<void> {
		this.urlRepository.
	}
}
