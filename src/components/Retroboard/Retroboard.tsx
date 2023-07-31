import { useState } from "react";
import { v4 as uuid } from "uuid";
import Category from "../Category/Category";
import "./Retroboard.scss";

export type ItemType = {
  id: string;
  name: string;
  category: string;
};

export type CategoryProp = {
  items: ItemType[];
  category: string;
  createItem: (itemInfo: ItemType) => void;
  editItem: (itemInfo: ItemType) => void;
};

const Retroboard = (): React.ReactNode => {
  const [items, setItems] = useState<ItemType[]>([
    { id: "test", name: "first task", category: "went well" },
    { id: "test2", name: "second task", category: "action items" },
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

  const editItem = (itemInfo: ItemType) => {
    const newItems = items.map((item) => {
      if (item.id === itemInfo.id) return itemInfo;
      return item;
    });

    setItems([...newItems]);
  };

  return (
    <div className="retro-board">
      <Category
        items={items}
        category="went well"
        createItem={createItem}
        editItem={editItem}
      />
      <Category
        items={items}
        category="needs improvement"
        createItem={createItem}
        editItem={editItem}
      />
      <Category
        items={items}
        category="action items"
        createItem={createItem}
        editItem={editItem}
      />
    </div>
  );
};

export default Retroboard;
