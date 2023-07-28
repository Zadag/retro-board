import { useState } from "react";

type itemInfoType = {
  name: string;
  category: string;
};

type itemType = null | {
  id: string;
  info: itemInfoType;
};

const Retroboard = (): React.ReactNode => {
  const [items, setItems] = useState<itemType[]>([
    { id: "test", info: { name: "First task", category: "went well" } },
  ]);

  // setItems([
  //   { id: "test", info: { name: "First task", category: "went well" } },
  // ]);

  return (
    <div className="retro-board">
      <p>blob</p>
      <p>lkh;gads</p>
    </div>
  );
};

export default Retroboard;
