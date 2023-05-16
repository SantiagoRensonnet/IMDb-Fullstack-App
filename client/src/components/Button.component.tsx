export const Button = ({
  sortProp,
  isActive,
  setActiveBtn,
}: {
  sortProp: string;
  isActive: boolean;
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
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
