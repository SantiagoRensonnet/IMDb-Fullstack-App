/** Types ***/
type movie = {
  tconst: String;
  titleType: String;
  primaryTitle: String;
  originalTitle: String;
  isAdult: Number;
  startYear: Number;
  endYear: Number;
  runtimeMinutes: Number;
  genres: String[] | null;
  averageRating: Number;
  numVotes: Number;
};
// import {fs} from "fs";
import * as fs from "fs";
// import {readline} from "readline";
import * as readline from "readline";
//*********************************************
//Mongoose init
//*********************************************
//connection to database
//-----------------------------------------------------
import mongoose from "mongoose";
mongoose
  .connect("mongodb://127.0.0.1:27017/imdb-app")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("connection error");
    console.log(err);
  });
//----------------------------------------------------
//Importing model
//----------------------------------------------------
import { Movie } from "./models/movie";

//----------------------------------------------------
const seedDb = async (movies: movie[]) => {
  console.log("seeding...");
  await Movie.deleteMany({}); //Borra todos los elementos de la base de datos
  // Insert the movies array into the collection
  try {
    const result = await Movie.insertMany(movies);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
/* seed files (tsv) can be found here https://developer.imdb.com/non-commercial-datasets*/
/* download title.basics.tsv.gz unzip and rename tsv file to movies.tsv*/
/* download title.ratings.tsv.gz unzip and rename tsv file to ratings.tsv*/
/* copy both files into this folder */

/***********************************************************************************/
/****************************** Rating File ***************************************/
/******************************************************************************* */
// Create a Map to store the ratings data
const ratings = new Map();

// Create a readline interface for the ratings file
const ratingFileStream = fs.createReadStream("./seeds/ratings.tsv");
const ratingRL = readline.createInterface({
  input: ratingFileStream,
  crlfDelay: Infinity,
});

// Read the ratings file and populate the ratings Map
ratingRL.on("line", (line) => {
  const [tconst, averageRating, numVotes] = line.split("\t");
  ratings.set(tconst, {
    averageRating: parseFloat(averageRating),
    numVotes: parseInt(numVotes, 10),
  });
});
// Close the readline interface for the ratings file
ratingRL.on("close", () => {
  console.log("Ratings data loaded");
});

/******************************************************************************* */
/****************************** Movies File **************************************/
/******************************************************************************* */
// Create another readline interface for the movies file
const movieFileStream = fs.createReadStream("./seeds/movies.tsv");
const movieRL = readline.createInterface({
  input: movieFileStream,
  crlfDelay: Infinity,
});

// Filter the movie list and add the ratings data
const movies: movie[] = [];
let lineNumber = 0;
let count = 0;
movieRL.on("line", (line) => {
  lineNumber++;

  if (lineNumber === 1) {
    // Skip the header line
    return;
  }

  const [
    tconst,
    titleType,
    primaryTitle,
    originalTitle,
    isAdult,
    startYear,
    endYear,
    runtimeMinutes,
    genres,
  ] = line.split("\t");

  const rating = ratings.get(tconst);

  // Filter by movie titleType and if it has votes and runtimeMinutes and
  if (
    titleType.toLowerCase().includes("movie") &&
    runtimeMinutes !== "\\N" &&
    startYear !== "\\N" &&
    rating
  ) {
    const movie = {
      tconst,
      titleType,
      primaryTitle,
      originalTitle,
      isAdult: parseInt(isAdult, 10),
      startYear: parseInt(startYear.trim(), 10),
      endYear: endYear === "\\N" ? 0 : parseInt(endYear.trim(), 10),
      runtimeMinutes: parseInt(runtimeMinutes.trim(), 10),
      genres: genres === "\\N" ? null : genres.split(","),
      averageRating: rating.averageRating,
      numVotes: rating.numVotes,
    };

    movies.push(movie);
  }
});

// When the movies file has been read completely,
//write to database
movieRL.on("close", () => {
  seedDb(movies);
});
