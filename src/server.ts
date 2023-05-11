//Environment variables
require("dotenv").config();
//Models
import Movie from "./models/movie";
//Custom Error
import ExpressError from "./utils/ExpressError";
//wrapAsync
import catchAsync from "./utils/catchAsync";
//Express
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
//Db connect interface
import { connectToDatabase } from "./services/database/database.service";
//Db Collection
import { Collection } from "mongodb";
//*********************************************
//Database init
//*********************************************
let moviesCollection: Collection;
connectToDatabase()
  .then((movies) => {
    moviesCollection = movies;
  })
  .catch((err) => {
    console.log("connection error");
    console.log(err);
  });
//*********************************************
//Express init
//*********************************************
const app = express();
app.use(express.urlencoded({ extended: true })); //to parse req.body
//*********************************************
//****************************************************************************
// Routing
//                 Route                                      ---> Name
//----------------------------------------------------------------------------
// GET /movies - List all movies with pagination              ---> Index
// GET /movies/:id - Get one movie (using ID)                 ---> Show

//*****************************************************************************

app.get(
  "/",
  catchAsync(async (_req: Request, res: Response) => {
    // const movies = (await collections.movies?.find({}).toArray()) as Movie[];
    const movie = (await moviesCollection.findOne({
      originalTitle: "Apocalypse Now",
    })) as Movie;
    console.log(movie);

    res.status(200).send(movie);
  })
);

// *************************************************************
// 404->route doesn't exist
// **************************************************************
app.all("*", (req, res, next) => {
  next(new ExpressError("Page not found", 404));
});
// ***********************************************************************
// ******************* ERROR HANDLING CHAIN ******************************
// ***********************************************************************
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error", { err });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
