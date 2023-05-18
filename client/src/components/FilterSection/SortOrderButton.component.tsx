//libs
import { useState, useContext } from "react";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
//context
import { MoviesContext } from "../../contexts/movies.context";
import { MoviesContextType } from "../../types";
export const SortOrderButton = () => {
  const { queryParams, setQueryParams } = useContext(
    MoviesContext
  ) as MoviesContextType;
  const [btnOrder, setBtnOrder] = useState(queryParams.sortOrder);

  const toggleOrder = (order: string) => (order === "desc" ? "asc" : "desc");
  const handleOrderChange = () => {
    setBtnOrder((prevBtnOrder) => toggleOrder(prevBtnOrder));
    setQueryParams((prevState) => ({
      ...prevState,
      sortOrder: toggleOrder(prevState.sortOrder),
    }));
  };
  return (
    <button
      className="btn btn-secondary grow flex items-center justify-center"
      onClick={handleOrderChange}
    >
      {btnOrder === "desc" ? (
        <HiSortDescending size={18} />
      ) : (
        <HiSortAscending size={18} />
      )}
    </button>
  );
};
