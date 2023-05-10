//Environment variables
require("dotenv").config();
//Express init
//*********************************************
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
const app = express();
// app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to parse req.body

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
