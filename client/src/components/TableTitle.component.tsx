export const TableTitle = () => {
  return (
    <article>
      <div className="flex items-center">
        <h1 className="text-lg font-medium text-gray-800 dark:text-white">
          Movies
        </h1>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
          Top 5
        </span>
      </div>
    </article>
  );
};
