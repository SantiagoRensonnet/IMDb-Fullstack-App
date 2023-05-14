import QueryString, { ParsedQs } from "qs";
import { Sort } from "mongodb";
import ExpressError from "./ExpressError";

const convertToMovieField = (field: string) => {
  switch (field) {
    case "title":
      return "primaryTitle";
    default:
    case "rating":
      return "averageRating";
    case "year":
      return "startYear";
    case "runtime":
      return "runtimeMinutes";
      return null;
  }
};
export const getSortingProperties = (query: QueryString.ParsedQs) => {
  let sort: Sort = { startYear: -1, numVotes: -1 }; //Trending sort
  if (typeof query.sort_by === "string") {
    const field = convertToMovieField(
      query.sort_by.split("(")[1].split(")")[0]
    );
    const direction = query.sort_by.split("(")[0];
    if (!field) {
      throw new ExpressError("Invalid field", 400);
    }
    const order = direction === "asc" ? 1 : -1;
    sort = {};
    sort[field] = order;
  }
  return sort;
};
export const getPaginationProperties = (query: QueryString.ParsedQs) => {
  const paginationProps = { page: 1, limit: 10 }; //default values
  if (typeof query.page === "string") {
    paginationProps.page = parseInt(query.page);
  }
  if (typeof query.limit === "string") {
    paginationProps.limit = parseInt(query.limit);
  }
  return paginationProps;
};
export const convertToFilter = (query: QueryString.ParsedQs) => {
  type FilterType = {
    startYear: Object;
    primaryTitle: Object;
    originalTitle: Object;
    numVotes: Object;
    genres?: Object;
    $text?: {
      $search: string;
      $language?: string | undefined;
      $caseSensitive?: boolean | undefined;
    };
  };

  const filter: FilterType = {
    startYear: { $lte: 2023 },
    primaryTitle: { $regex: /^[\x00-\x7F]*$/ }, //Exclude ASCII extended characters
    originalTitle: { $regex: /^[\x00-\x7F]*$/ },
    numVotes: { $gt: 1000 },
  };
  if (typeof query.genre === "string") {
    filter.genres = { $in: [query.genre] };
  }
  if (typeof query.title === "string" && query.title) {
    filter.$text = {
      $search: `\"${query.title.split("+").join(" ")}\"`,
    };
  }
  return filter;
};

const convertToMongoFilterRule = (queryCriteria: any) => {
  type parsedCriteria = {
    $eq?: number | null;
    $gt?: number | null;
    $gte?: number | null;
    $lt?: number | null;
    $lte?: number | null;
    $ne?: number | null;
  };
  const parsedCriteria: parsedCriteria = {};
  //keys are operators, values are strings to be parsed to integers
  switch (Object.keys(queryCriteria)[0]) {
    case "eq":
      parsedCriteria.$eq = queryCriteria.eq
        ? parseFloat(queryCriteria.eq)
        : null;
      return parsedCriteria;

    case "gt":
      parsedCriteria.$gt = queryCriteria.gt
        ? parseFloat(queryCriteria.gt)
        : null;
      return parsedCriteria;
    case "gte":
      parsedCriteria.$gte = queryCriteria.gte
        ? parseInt(queryCriteria.gte)
        : null;
      return parsedCriteria;
    case "lt":
      parsedCriteria.$lt = queryCriteria.lt
        ? parseFloat(queryCriteria.lt)
        : null;
      return parsedCriteria;
    case "lte":
      parsedCriteria.$lte = queryCriteria.lte
        ? parseInt(queryCriteria.lte)
        : null;
      return parsedCriteria;
    case "ne":
      parsedCriteria.$ne = queryCriteria.ne
        ? parseFloat(queryCriteria.ne)
        : null;
      return parsedCriteria;
    default:
      return parsedCriteria;
  }
};

export const getFilterByRuntimeAndRating = (query: QueryString.ParsedQs) => {
  type FilterType = {
    runtimeMinutes?: Object;
    averageRating?: Object;
  };
  const filter: FilterType = {};
  // numVotes: { $gt: 1000 }
  if (typeof query.runtime === "object") {
    const runtimeCriteria = convertToMongoFilterRule(query.runtime);
    filter.runtimeMinutes = runtimeCriteria;
  }
  if (typeof query.rating === "object") {
    const ratingCriteria = convertToMongoFilterRule(query.rating);
    filter.averageRating = ratingCriteria;
  }
  return filter;
};
