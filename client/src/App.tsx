//libs
import { useEffect } from "react";
//components
import { TableSection } from "./components/Table/TableSection.component";
import { FilterSection } from "./components/FilterSection/FilterSection.component";

function App() {
  // useEffect(() => {
  //   const urlWithProxy = "/movies";
  //   fetch(urlWithProxy)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <main className="min-h-screen flex flex-col gap-6 items-center justify-center bg-stone-200 xl:px-4">
      <FilterSection />
      <TableSection />
    </main>
  );
}

export default App;
