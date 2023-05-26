import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useResize } from "../../hooks/useResize.hook";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/movies.context";
import { MoviesContextType } from "../../types";

export const MoviePoster = ({
  id,
  movieTitle,
  moviePoster,
}: {
  id: string;
  movieTitle: string;
  moviePoster: string;
}) => {
  const isMobile = useResize();
  const { newMoviesPosters } = useContext(MoviesContext) as MoviesContextType;
  const posterPath = moviePoster || newMoviesPosters.get(id);

  return posterPath ? (
    <img
      className="rounded h-full object-cover"
      src={posterPath}
      alt={`${movieTitle}-poster`}
    />
  ) : (
    <Skeleton
      width={isMobile ? 25 : 64}
      height={96}
      containerClassName="flex-1"
    />
  );
};
