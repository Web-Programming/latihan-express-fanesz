const express = require("express");
const housingController = require("../controllers/housing");

const router = express.Router();

router.get("/", housingController.Index);
module.exports = router;
