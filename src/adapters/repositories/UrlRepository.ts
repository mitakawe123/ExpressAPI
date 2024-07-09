import { IMongo } from "../../db/IMongo";
import { IUrlRepository } from "../../entity/IUrlRepository";

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
