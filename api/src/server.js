import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const V4ResourcesToServe = process.env.REACT_APP_V4_AVAILABLE_RESOURCES;

console.log("V4ResourcesToServe", V4ResourcesToServe);
// Create an express server
var app = express();

app.use("/v3", express.static(path.join(__dirname, "../../admin-v3/dist")));
app.use("/v4", express.static(path.join(__dirname, "../../admin-v4/dist")));

app.listen(4000, () =>
  console.log("Express Server Now Running On localhost:4000/")
);
