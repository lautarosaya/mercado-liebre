const express = require("express");
const path = require("path");

const app = express();

const routePublic = path.join(__dirname, "public");

app.use(express.static(routePublic));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`El sv anda en el puerto ${PORT}`));
