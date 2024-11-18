import express from "express";
import pool from "./database/DBconnection.js";
const app = express();
const port = 3000;

app.use(express.json());
pool;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
