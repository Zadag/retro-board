import { useState } from "react";
import { v4 as uuid } from "uuid";
import Category from "../Category/Category";
import "./Retroboard.scss";

export type ItemType = {
  id: string;
  name: string;
  category: string;
};

export type ItemsProp = {
  items: ItemType[];
};

const Retroboard = (): React.ReactNode => {
  const [items, setItems] = useState<ItemType[]>([
    { id: "test", name: "first task", category: "all done" },
    { id: "test2", name: "second task", category: "all done" },
  ]);

  const createItem = (itemInfo: ItemType) => {
    const id = uuid();
    const { name, category } = itemInfo;
    // build new item obj and add to state
    setItems([...items, { name, category, id }]);
  };

  const removeItem = (itemInfo: ItemType) => {
    const newItems = items.filter((item) => item.id !== itemInfo.id);
    setItems([...newItems]);
  };

  return (
    <div className="retro-board">
      <Category items={items} />
    </div>
  );
};

export default Retroboard;
