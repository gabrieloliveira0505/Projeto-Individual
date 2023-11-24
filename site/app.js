const express = require("express");
const path = require("path");
const cors = require("cors");

const PORTA = 3000;

const indexRouter = require("./src/routes/index.js");
const usuarioRouter = require("./src/routes/usuarios.js");
const eloRouter = require("./src/routes/elo.js");
const dashRouter = require("./src/routes/quizdash.html");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/usuario", usuarioRouter);
app.use("/elo", eloRouter);
app.use("/quizdash", eloRouter);

app.listen(PORTA, () => {
    console.log(`Estamos rodando na porta ${PORTA}`);
});