import express from "express";
import urlRouter from "../routes/urls";
import bodyParser from "body-parser";
import ConnectMongo from "../db/mongo";

//connect to mongoDB
ConnectMongo();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/url", urlRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
