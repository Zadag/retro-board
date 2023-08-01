import { CategoryProp, ItemType } from "../Retroboard/Retroboard";
import "./Category.scss";

type HandleChangeParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  item: ItemType;
};

type HandleDeleteParams = {
  item: ItemType;
};

const Category = ({
  items,
  category,
  createItem,
  editItem,
  removeItem,
  moveItem,
  addLike,
  addDislike,
}: CategoryProp): React.ReactNode => {
  const handleClick = () => {
    createItem({
      name: "default name",
      category: category,
      id: "placeholder",
      likes: 0,
      dislikes: 0,
    });
  };

  const handleChange = ({ e, item }: HandleChangeParams) => {
    editItem({
      name: e.target.value,
      category: category,
      id: item.id,
      likes: item.likes,
      dislikes: item.dislikes,
    });
  };

  const handleDelete = ({ item }: HandleDeleteParams) => {
    removeItem({
      name: item.name,
      category: category,
      id: item.id,
      likes: 0,
      dislikes: 0,
    });
  };

  const handleMove = (target: string, item: ItemType) => {
    moveItem(target, item);
  };

  const handleLike = (item: ItemType) => {
    addLike(item);
  };

  const handleDislike = (item: ItemType) => {
    addDislike(item);
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
            <button onClick={() => handleDelete({ item })}>-</button>
            <button onClick={() => handleMove("left", item)}>{"<"}</button>
            <button onClick={() => handleMove("right", item)}>{">"}</button>
            <button onClick={() => handleLike(item)}>like</button>
            <p>{item.likes}</p>
            <button onClick={() => handleDislike(item)}>dislike</button>
            <p>{item.dislikes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
