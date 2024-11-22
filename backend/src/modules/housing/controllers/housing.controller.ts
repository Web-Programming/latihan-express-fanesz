import { Request, Response } from "express";
import BaseController from "@base/controller";
import HousingService from "../services/housing.service";

class HousingController extends BaseController {
  private housingService = new HousingService();

  constructor() {
    super();
    this.getAllHousing();
  }

  private async getAllHousing() {
    this.router.get("/housing", async (_: Request, res: Response) => {
      const housing = await this.housingService.getAllHousing();
      if (this.isServiceError(housing)) {
        return this.handleError(res, housing);
      }

      return this.handleSuccess(res, {
        message: "Success getting housing",
        data: housing,
      });
    });
  }
}

export default HousingController;
