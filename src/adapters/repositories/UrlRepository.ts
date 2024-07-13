import { IMongo } from "../../db/Mongo";
import { IUrlRepository } from "../../entity/interfaces/IUrlRepository.interface";

class UrlRepository implements IUrlRepository {
	private readonly mongo: IMongo;

	constructor(mongo: IMongo) {
		this.mongo = mongo;
	}

	save(): void {
		throw new Error("Method not implemented.");
	}

	findOne(): void {
		throw new Error("Method not implemented.");
	}
}
