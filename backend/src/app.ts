import MongoDatabase from "@config/mongo.database";
import Router from "@config/router";
import UserController from "@user/controllers/user.controller";
import env from "@utils/env";
import HousingController from "./modules/housing/controllers/housing.controller";

new MongoDatabase({
  dbHost: env.get("MONGO_DB_HOST"),
  dbPort: Number(env.get("MONGO_DB_PORT")),
  dbName: env.get("MONGO_DB_NAME"),
});

const router = new Router();

router.app.use("/", new UserController().getRouter());
router.app.use("/", new HousingController().getRouter());

router.app.get("/", (_, res) => {
  res.send("Hello");
});

router.listen();
