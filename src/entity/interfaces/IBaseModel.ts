import { Types } from "mongoose";

export interface IBaseModel extends Document {
	_id: Types.ObjectId;
}
