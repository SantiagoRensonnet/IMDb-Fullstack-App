export const TableTitle = () => {
  return (
    <article>
      <div className="flex items-center justify-between px-1">
        <h1 className="text-lg font-medium text-gray-800 dark:text-white">
          Movies
        </h1>
        <span className="px-3 py-1 text-xs  text-[hsl(210,83%,53%)]  bg-[hsl(203,95%,93%)] rounded-full dark:bg-gray-800 dark:text-blue-400">
          Top 10
        </span>
      </div>
    </article>
  );
};
