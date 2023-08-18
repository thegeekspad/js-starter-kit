import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.send("JavaScript Starter Kit");
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/html/index.html"));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
