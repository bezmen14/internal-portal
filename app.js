const express = require("express"); //подключаем экспресс
const morgan = require("morgan"); // логирует htttp статус поступают ли какие нить запросы
const path = require("path");
const hbs = require("hbs");
const PORT = 3000;
const app = express()

app.set("view engine", "hbs"); //подключаем движ
hbs.registerPartials(path.join(__dirname + "/views/partials"));
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index")
})

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/signin", (req, res) => {
  res.render("signin");
});















app.listen(PORT, () => {
  console.log("Сервер запустился", PORT);
});
