process.on("uncaughtException", (err) => {
  console.log("error in the code project", err);
});

import express from "express";
import sequelize from "./database/DBconnection.js";
import { AppError } from "./src/util/AppError.js";

export const app = express();
const port = 3000;

sequelize.sync();

app.use(express.json());

/**
 bootstrap for routing */

app.get("/", (req, res) => {
  res.json({ message: "hello from the server" });
});
app.use("*", (req, res, next) => {
  next(new AppError(`invalid url ${req.originalUrl}`, 404));
});

/**
express error handling f */
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode).send({ message: "error", error: err.message });
});

process.on("unhandledRejection", (err) => {
  console.log("error message:", err);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
