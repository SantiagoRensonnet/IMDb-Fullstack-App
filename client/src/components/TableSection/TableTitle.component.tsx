import { useContext, useState } from "react";
import { QueryContext } from "../../contexts/query.context";
import { QueryContextType } from "../../types";
export const TableTitle = () => {
  const { queryParams, setQueryParams } = useContext(
    QueryContext
  ) as QueryContextType;
  const [limit, setLimit] = useState(queryParams.limit);
  return (
    <article>
      <div className="flex items-center justify-between px-1">
        <h1 className="text-lg font-medium text-gray-800">Movies</h1>
        <select
          className="px-3 py-1 text-xs  text-[hsl(210,83%,53%)]  bg-[hsl(203,95%,93%)] rounded-full"
          name="top"
          id="top-select"
          value={limit}
          onChange={(e) => {
            switch (parseInt(e.target.value)) {
              case 100:
                setLimit(100);
                setQueryParams((prevQuery) => ({
                  ...prevQuery,
                  limit: 100,
                  page: 1,
                }));
                break;
              case 250:
                setLimit(250);
                setQueryParams((prevQuery) => ({
                  ...prevQuery,
                  limit: 250,
                  page: 1,
                }));
                break;
              default:
                //case 10
                setLimit(10);
                setQueryParams((prevQuery) => ({
                  ...prevQuery,
                  limit: 10,
                  page: 1,
                }));
                break;
            }
          }}
        >
          <option value="10">Top 10</option>
          <option value="100">Top 100</option>
          <option value="250">Top 250</option>
        </select>
      </div>
    </article>
  );
};
