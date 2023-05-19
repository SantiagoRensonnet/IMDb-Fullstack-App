//libs
import { HiStar } from "react-icons/hi";
//components
import { MovieData } from "../../types";
import { GenrePills } from "./GenrePills/GenrePills.component";
import { MoviePoster } from "./MoviePoster.component";

export const TableRow = ({
  id,
  title,
  genres,
  year,
  rating,
  runtime,
}: MovieData) => {
  const imDbUrl = `https://www.imdb.com/title/${id}`;

  return (
    <tr className="h-28">
      <td className="table-data">
        <a
          className="h-28 px-2 py-2 flex flex-col items-center rounded"
          href={imDbUrl}
          target="_blank"
        >
          <MoviePoster movieTitle={title} id={id} />
        </a>
      </td>
      <td className="table-data">
        <div>
          <h2 className="font-medium text-gray-800">{title}</h2>
        </div>
      </td>
      <td className="table-data">
        <GenrePills genres={genres} />
      </td>
      <td className="table-data">
        <div>
          <h4 className="text-gray-700">{year}</h4>
        </div>
      </td>
      <td className="table-data">
        <div className="flex items-center">
          <HiStar size={18} color={"rgb(245,197,24)"} />
          <span className="font-semibold">{rating}</span>
        </div>
      </td>

      <td className="table-data">{runtime} minutes</td>
    </tr>
  );
};
