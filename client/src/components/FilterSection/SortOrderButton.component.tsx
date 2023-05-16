import { useState } from "react";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
export const SortOrderButton = () => {
  const [order, setOrder] = useState("desc");

  const toggleOrder = () => {
    setOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
  };
  return (
    <button
      className="btn btn-secondary grow flex items-center justify-center"
      onClick={toggleOrder}
    >
      {order === "desc" ? (
        <HiSortDescending size={18} />
      ) : (
        <HiSortAscending size={18} />
      )}
    </button>
  );
};
