import { Document, Model, connection, connect, Types } from "mongoose";

export interface IMongo<T> {
	connect(): void;
	create(data: T): Promise<T>;
	findById(id: Types.ObjectId): Promise<T | null>;
	update(id: Types.ObjectId, data: Partial<T>): Promise<T | null>;
	delete(id: Types.ObjectId): Promise<T | null>;
	findOne(filterCriteria: Object): Promise<T | null>;
}

class Mongo<T extends Document> implements IMongo<T> {
	private model: Model<T>;

	constructor(model: Model<T>) {
		this.model = model;
	}

	connect(): void {
		connect("mongodb://localhost/UrlShort", {
			autoIndex: true,
			appName: "URLShortening",
		});

		connection.on(
			"error",
			console.error.bind(console, "MongoDB connection error:")
		);
		connection.once("open", () => console.log("Connected to MongoDB"));
	}

	async create(data: T): Promise<T> {
		const document = await this.model.create(data);
		return document;
	}

	async findById(id: Types.ObjectId): Promise<T | null> {
		const document = await this.model.findById(id);
		return document;
	}

	async findOne(filterCriteria: Object): Promise<T | null> {
		const document = await this.model.findOne(filterCriteria);
		return document;
	}

	async update(id: Types.ObjectId, data: Partial<T>): Promise<T | null> {
		return this.model.findByIdAndUpdate(id, data, { new: true });
	}

	async delete(id: Types.ObjectId): Promise<T | null> {
		const document = await this.model.findByIdAndDelete(id);
		return document;
	}
}

export default Mongo;
