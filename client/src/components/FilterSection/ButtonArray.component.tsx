//libs
import { useContext, useState } from "react";
//context
import { MoviesContext } from "../../contexts/movies.context";
import { MoviesContextType } from "../../types";
//components
import { Button } from "./Button.component";
import { SortOrderButton } from "./SortOrderButton.component";

export const ButtonArray = () => {
  const sortProperties = ["rating", "title", "year", "runtime"];
  const { queryParams, setQueryParams } = useContext(
    MoviesContext
  ) as MoviesContextType;
  const [activeBtn, setActiveBtn] = useState(queryParams.sortBy);
  //Event Handlers
  const handleSortChange = (sortProp: string) => {
    setActiveBtn(sortProp);
    setQueryParams((prevState) => ({ ...prevState, sortBy: sortProp }));
  };
  return (
    <div>
      <h2 className="mt-1 ml-1 text-sm text-gray-500 dark:text-gray-300">
        Sort By
      </h2>
      <article className="flex mb-2 sm:mb-0 bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
        {sortProperties.map((sortProp, index) => (
          <Button
            key={index}
            sortProp={sortProp}
            isActive={sortProp === activeBtn}
            setActiveBtn={handleSortChange}
          />
        ))}
        <SortOrderButton />
      </article>
    </div>
  );
};
