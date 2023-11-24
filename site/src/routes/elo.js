const express = require("express");
const router = express.Router();

const eloController = require("../controllers/eloController")

router.get("/", async (req, res) => {
    await eloController.consultarElos(res);
});

module.exports = router;