import { Document } from "mongoose";

export interface HousingDto extends Document {
  idhousing: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
