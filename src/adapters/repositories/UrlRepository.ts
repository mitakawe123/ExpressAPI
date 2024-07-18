import { Types } from "mongoose";
import { IMongo } from "../../db/Mongo";
import { IUrl } from "../../entity/interfaces/IUrl.interface";
import { IUrlRepository } from "../../entity/interfaces/IUrlRepository.interface";

class UrlRepository implements IUrlRepository {
	private readonly mongo: IMongo<IUrl>;

	constructor(mongo: IMongo<IUrl>) {
		this.mongo = mongo;
	}

	async findById(id: Types.ObjectId): Promise<IUrl> {
		const url = await this.mongo.findById(id);

		if (url === null) throw new Error("Url is not found");

		return url;
	}
}
