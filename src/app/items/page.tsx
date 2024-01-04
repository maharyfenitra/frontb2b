"use client";
import { TopMenu } from "./components/TopMenu";
import { Header } from "@/lib";
import { useTopMenuAction } from "./hooks/useTopMenyAction";

const Items = () => {
  const { createItemEvent } = useTopMenuAction();

  return (
    <div>
      <Header title={"Items"} />
      <TopMenu onClickCreate={createItemEvent} />
    </div>
  );
};

export default Items;
