import { useEffect, useState } from "react";
import axios from "axios";
export const MoviePoster = ({
  id,
  movieTitle,
}: {
  id: string;
  movieTitle: string;
}) => {
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    const getPoster = async () => {
      const findIMDbMovieEndpoint = `https://api.themoviedb.org/3/find/${id}?api_key=d76c5df85f84510c22bbc25e156327ce&external_source=imdb_id`;
      try {
        const response = await axios.get(findIMDbMovieEndpoint);
        const result = response.data.movie_results;

        if (result.length > 0) {
          const relativePosterPath = result[0].poster_path;
          setPosterPath(
            "https://image.tmdb.org/t/p/original" + relativePosterPath
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPoster();
  }, [id]);
  return posterPath ? (
    <img
      className="rounded h-full object-cover"
      src={posterPath}
      alt={`${movieTitle}-poster`}
    />
  ) : (
    <></>
  );
};
