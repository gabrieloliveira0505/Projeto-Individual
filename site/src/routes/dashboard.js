const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController")

router.get("/", async (req, res) => {
    await dashboardController.corrigir(res);
});

module.exports = router;