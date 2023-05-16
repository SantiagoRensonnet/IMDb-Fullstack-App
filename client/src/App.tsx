//components
import { TableSection } from "./components/Table/TableSection.component";
import { FilterSection } from "./components/FilterSection/FilterSection.component";

function App() {
  return (
    <main className="min-h-screen flex flex-col gap-6 items-center justify-center bg-stone-200 xl:px-4">
      <FilterSection />
      <TableSection />
    </main>
  );
}

export default App;
