import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postsRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// taham6408 db user
// xbA2Ix9U2WkSn5OB database pass

const CONNECTION_URL =
  "mongodb+srv://taham6408:xbA2Ix9U2WkSn5OB@memories.atgtwwv.mongodb.net/";
const PORT = process.env.PORT || 5000;
// mongodb://127.0.0.1:27017/memories
// mongodb://localhost:27017
// local db url "mongodb://127.0.0.1:27017/memories"
mongoose
  .connect(CONNECTION_URL)
  .then((conn) => {
    app.listen(PORT, () => {
      console.log(conn.connection.host);
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "API's are working" });
});

app.use("/api/v1", postsRoutes);
