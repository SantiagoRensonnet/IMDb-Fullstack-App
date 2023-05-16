import { ButtonArray } from "./components/ButtonArray.component";
import { TableTitle } from "./components/TableTitle.component";
import { GenreSelect } from "./components/GenreSelect.component";
import { SearchBar } from "./components/SearchBar.component";
import { Table } from "./components/Table.component";
function App() {
  // useEffect(() => {
  //   const urlWithProxy = "/movies";
  //   fetch(urlWithProxy)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-stone-200 xl:px-4">
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
      <section className="container flex flex-col mt-6 px-4">
        <Table />
      </section>
    </main>
  );
}

export default App;
