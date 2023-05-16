import { useState } from "react";
import { Button } from "./Button.component";
import { SortOrderButton } from "./SortOrderButton.component";
export const ButtonArray = () => {
  const sortProperties = ["title", "rating", "year", "runtime"];
  const [activeBtn, setActiveBtn] = useState("title");

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
            setActiveBtn={setActiveBtn}
          />
        ))}
        <SortOrderButton />
      </article>
    </div>
  );
};
