import { ItemsProp } from "../Retroboard/Retroboard";

const Category = ({ items }: ItemsProp): React.ReactNode => {
  return (
    <div>
      {items.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default Category;
