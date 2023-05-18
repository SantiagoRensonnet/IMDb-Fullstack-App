export const Button = ({
  sortProp,
  isActive,
  setActiveBtn,
}: {
  sortProp: string;
  isActive: boolean;
  setActiveBtn: (sortProp: string) => void;
}) => {
  return (
    <button
      className={"btn " + (isActive ? "btn-primary" : "btn-secondary")}
      onClick={() => setActiveBtn(sortProp)}
    >
      {sortProp}
    </button>
  );
};
