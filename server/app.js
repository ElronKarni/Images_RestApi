import express from "express";
import cors from "cors";
import photosRoutes from "./routes/photosRoutes.js";
import "dotenv/config";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/photos", photosRoutes);

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
