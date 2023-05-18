export type MovieFetchData = {
  __v: number;
  _id: string;
  averageRating: number;
  endYear: number;
  genres: string[];
  isAdult: number;
  numVotes: number;
  originalTitle: string;
  primaryTitle: string;
  runtimeMinutes: number;
  startYear: number;
  tconst: string;
  titleType: string;
};
export type MovieData = {
  id: string;
  rating: number;
  genres: string[];
  title: string;
  runtime: number;
  year: number;
};

export type queryParamObject = {
  sortBy: string;
  sortOrder: "asc" | "desc";
};
export type MoviesContextType = {
  movies: Array<MovieData>;
  queryParams: queryParamObject;
  setQueryParams: React.Dispatch<React.SetStateAction<queryParamObject>>;
  isLoading: boolean;
};
export enum genreEnum {
  "",
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Game-Show",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
}
