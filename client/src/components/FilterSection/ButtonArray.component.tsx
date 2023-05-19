//libs
import { useContext, useState } from "react";
//types
import { QueryContextType } from "../../types";
import { sortByType } from "../../types";
//context
import { QueryContext } from "../../contexts/query.context";
//components
import { Button } from "./Button.component";
import { SortOrderButton } from "./SortOrderButton.component";

export const ButtonArray = () => {
  const sortProperties: sortByType[] = ["rating", "title", "year", "runtime"];
  const { queryParams, setQueryParams } = useContext(
    QueryContext
  ) as QueryContextType;
  const [activeBtn, setActiveBtn] = useState(queryParams.sortBy);
  //Event Handlers
  const handleSortChange = (sortProp: sortByType) => {
    setActiveBtn(sortProp);
    setQueryParams((prevState) => ({
      ...prevState,
      sortBy: sortProp,
      page: 1,
    }));
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
