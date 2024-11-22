import { Request, Response } from "express";
import BaseController from "@base/controller";
import HousingService from "../services/housing.service";

class HousingController extends BaseController {
  private housingService = new HousingService();

  constructor() {
    super();
    this.getAllHousing();
    this.getHousingById();
  }

  private async getAllHousing() {
    this.router.get("/housings", async (_: Request, res: Response) => {
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

  private async getHousingById() {
    this.router.get("/housings/:id", async (req: Request, res: Response) => {
      const { id } = req.params;
      const housing = await this.housingService.getHousingById(id);
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
