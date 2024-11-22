import BaseService from "@base/service";
import { ServiceError } from "@types";
import { StatusBadRequest } from "@utils/statusCodes";
import { HousingDto } from "../dtos/housing.dto";
import { HousingModel } from "../models/housing.model";

class HousingService extends BaseService<HousingDto> {
  constructor() {
    super(HousingModel);
  }

  public async getAllHousing(): Promise<HousingDto[] | ServiceError> {
    const housings = await this.find();
    if (!housings) {
      return this.throwError("Error getting housings", StatusBadRequest);
    }

    return housings;
  }

  public async getHousingById(id: string): Promise<HousingDto | ServiceError> {
    const housing = await this.findOne({ _id: id });
    if (!housing) {
      return this.throwError("Error getting housing", StatusBadRequest);
    }

    return housing;
  }
}

export default HousingService;
