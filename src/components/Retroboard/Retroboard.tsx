import { useState } from "react";
import { v4 as uuid } from "uuid";

type itemType = {
  id: string;
  name: string;
  category: string;
};

const id = uuid();

const Retroboard = (): React.ReactNode => {
  const [items, setItems] = useState<itemType[]>([
    { id: "test", name: "first task", category: "all done" },
  ]);

  const createItem = (itemInfo: itemType) => {
    const id = uuid();
    const { name, category } = itemInfo;
    // build new item obj and add to state
    setItems([...items, { name, category, id }]);
  };

  return (
    <div className="retro-board">
      <p>blob</p>
      <p>lkh;gads</p>
    </div>
  );
};

export default Retroboard;
