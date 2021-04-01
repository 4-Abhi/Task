const express = require("express");
const dotenv = require("dotenv");
const user = require("./routes/userRoutes");
const product = require("./routes/productRoutes");
const db = require("./db/db");
const app = express();

dotenv.config({ path: "./.config.env" });
app.use(express.json());

app.use("/api/user", user);
app.use("/api/product", product);

const Port = process.env.PORT || 4000;

app.listen(Port, () => {
  console.log(`Processs start on ${Port}`);
});
