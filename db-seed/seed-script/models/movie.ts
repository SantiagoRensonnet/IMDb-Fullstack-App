import mongoose from "mongoose";
const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
  tconst: String,
  titleType: String,
  primaryTitle: String,
  originalTitle: String,
  isAdult: Number,
  startYear: Number,
  endYear: Number,
  runtimeMinutes: Number,
  genres: [String],
  averageRating: Number,
  numVotes: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

export { Movie };
