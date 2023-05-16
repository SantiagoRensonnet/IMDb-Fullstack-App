import { TableTitle } from "../Table/TableTitle.component";
import { ButtonArray } from "./ButtonArray.component";
import { GenreSelect } from "./GenreSelect.component";
import { SearchBar } from "./SearchBar.component";
export const FilterSection = () => {
  return (
    <section className="container sm:grid sm:grid-cols-2 sm:gap-4 px-4">
      <section>
        <TableTitle />
        <ButtonArray />
      </section>
      <section className="sm:flex sm:flex-col sm:justify-end sm:gap-y-2">
        <GenreSelect />
        <SearchBar />
      </section>
    </section>
  );
};
