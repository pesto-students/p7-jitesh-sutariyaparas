var express = require("express");
const app = express();
const PORT = 3005;

require("dotenv").config();
console.log(process.env.WEATHER_API_KEY);

app.use(express.json());

app.use("/v1", require("./routes/weather.route"));

app.use(function (req, res) {
  res.status(404).json("err: Page not found");
});

app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
});
