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
export type sortByType = "rating" | "title" | "year" | "runtime";
export type rangeCategoryType = "rating" | "runtime";

export type queryParamObject = {
  sortBy: sortByType;
  sortOrder: "asc" | "desc";
  page: number;
  genre?: string;
  title?: string;
  rating?: number;
  runtime?: number;
};
export type paginationProps = {
  limit?: number;
  prevPage?: number | null;
  currentPage?: number;
  nextPage?: number | null;
};
export type QueryContextType = {
  queryParams: queryParamObject;
  setQueryParams: React.Dispatch<React.SetStateAction<queryParamObject>>;
  paginationProps: paginationProps;
  isLoading: boolean;
};
export type MoviesContextType = {
  movies: Array<MovieData>;
  setMovies: React.Dispatch<React.SetStateAction<Array<MovieData>>>;
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
