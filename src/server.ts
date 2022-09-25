import express from "express";
import routes from "./api";
import cors from "cors";

//
const app: express.Application = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (_req, res) => {
  res.send("sss");
});

const port = 5000;
app.listen(port, () => {
  process.stdout.write(`server started at http://localhost:${port}\n`);
});
