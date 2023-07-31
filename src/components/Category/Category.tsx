import { CategoryProp, ItemType } from "../Retroboard/Retroboard";
import "./Category.scss";

type HandleChangeParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  item: ItemType;
};

const Category = ({
  items,
  category,
  createItem,
  editItem,
}: CategoryProp): React.ReactNode => {
  const handleClick = () => {
    createItem({ name: "default name", category: category, id: "placeholder" });
  };

  const handleChange = ({ e, item }: HandleChangeParams) => {
    editItem({ name: e.target.value, category: category, id: item.id });
  };

  return (
    <div className="category">
      <h1>{category}</h1>
      <button className="add-item-button" onClick={handleClick}>
        +
      </button>
      {items.map((item, index) => {
        if (category !== item.category) return;
        return (
          <div key={`idx-${index}`} className="retro-item">
            <input
              type="text"
              className="retro-item-name"
              value={item.name}
              onChange={(e) => handleChange({ e, item })}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
