import { Types } from "mongoose";
import { IUrl } from "./IUrl.interface";

export interface IUrlRepository {
	findById(id: Types.ObjectId): Promise<IUrl>;
}
