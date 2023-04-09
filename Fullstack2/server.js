const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "http://localhost:8001",
};

app.use(cors(corsOptions));

// парсим запросы контента
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models')
db.sequelize.sync({alter: true}).then(() => {
    console.log("DataBase is synchronized.")
});

app.get("/", (req, res) => {
  res.json({ message: "My application is work." });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
});
