import mongoose, { Schema } from "mongoose";
import { HousingDto } from "../dtos/housing.dto";

const housingSchema = new Schema<HousingDto>({
  idhousing: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  availableUnits: {
    type: Number,
    required: true,
  },
  wifi: {
    type: Boolean,
    required: true,
  },
  laundry: {
    type: Boolean,
    required: true,
  },
});

export const HousingModel = mongoose.model<HousingDto>(
  "Housing",
  housingSchema,
);
