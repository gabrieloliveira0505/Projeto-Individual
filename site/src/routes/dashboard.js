const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboard.Controller")

router.get("/dash", async (req, res) => {
    dashboardController.resultadoQuiz(req, res);
});
router.get("/pegarDadosQuiz", function (req, res) {
    dashboardController.pegarDadosQuiz(req, res);
});

module.exports = router;