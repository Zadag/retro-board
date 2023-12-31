import { useState } from "react";
import { v4 as uuid } from "uuid";
import Category from "../Category/Category";
import "./Retroboard.scss";

export type ItemType = {
  id: string;
  name: string;
  category: string;
  likes: number;
  dislikes: number;
};

export type CategoryProp = {
  items: ItemType[];
  category: string;
  createItem: (itemInfo: ItemType) => void;
  editItem: (itemInfo: ItemType) => void;
  removeItem: (itemInfo: ItemType) => void;
  moveItem: (target: string, itemInfo: ItemType) => void;
  addLike: (itenInfo: ItemType) => void;
  addDislike: (itenInfo: ItemType) => void;
};

const Retroboard = (): React.ReactNode => {
  const [items, setItems] = useState<ItemType[]>([
    {
      id: "test",
      name: "first task",
      category: "went well",
      likes: 0,
      dislikes: 0,
    },
    {
      id: "test2",
      name: "second task",
      category: "action items",
      likes: 0,
      dislikes: 0,
    },
  ]);

  const createItem = (itemInfo: ItemType) => {
    const id = uuid();
    const { name, category } = itemInfo;
    // build new item obj and add to state
    setItems([...items, { name, category, id, likes: 0, dislikes: 0 }]);
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

  // This should probably be done better but I've run out of time ¯\_(ツ)_/¯
  const moveItem = (target: string, itemInfo: ItemType) => {
    const { name, id, category, likes, dislikes } = itemInfo;
    let newCategory: string;
    if (target === "left") {
      if (category === "went well") newCategory = "action items";
      if (category === "needs improvement") newCategory = "went well";
      if (category === "action items") newCategory = "needs improvement";
    } else if (target === "right") {
      if (category === "went well") newCategory = "needs improvement";
      if (category === "needs improvement") newCategory = "action items";
      if (category === "action items") newCategory = "went well";
    }

    const newItem = { name, id, category: newCategory!, likes, dislikes };

    const newItems = items.filter((item) => item.id !== itemInfo.id);
    setItems([...newItems, newItem]);
  };

  const addLike = (itemInfo: ItemType) => {
    const { name, id, category, likes, dislikes } = itemInfo;
    const newLikes = likes + 1;
    const newItems = items.map((item) => {
      if (item.id === itemInfo.id)
        return { name, id, category, likes: newLikes, dislikes };
      return item;
    });

    setItems([...newItems]);
  };

  const addDislike = (itemInfo: ItemType) => {
    const { name, id, category, likes, dislikes } = itemInfo;
    const newDislikes = dislikes + 1;
    const newItems = items.map((item) => {
      if (item.id === itemInfo.id)
        return { name, id, category, likes, dislikes: newDislikes };
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
        removeItem={removeItem}
        moveItem={moveItem}
        addLike={addLike}
        addDislike={addDislike}
      />
      <Category
        items={items}
        category="needs improvement"
        createItem={createItem}
        editItem={editItem}
        removeItem={removeItem}
        moveItem={moveItem}
        addLike={addLike}
        addDislike={addDislike}
      />
      <Category
        items={items}
        category="action items"
        createItem={createItem}
        editItem={editItem}
        removeItem={removeItem}
        moveItem={moveItem}
        addLike={addLike}
        addDislike={addDislike}
      />
    </div>
  );
};

export default Retroboard;
