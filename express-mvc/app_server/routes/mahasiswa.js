const express = require("express");
const mahasiswaController = require("../controllers/mahasiswa");

const router = express.Router();

router.get("/index", mahasiswaController.index);
router.post("/insert", mahasiswaController.insert);
router.patch("/update/:id", mahasiswaController.update);
router.get("/show/:id", mahasiswaController.show);
router.delete("/delete/:id", mahasiswaController.destroy);

module.exports = router;
