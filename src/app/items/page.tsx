"use client";
import { TopMenu } from "./components/TopMenu";
import { Header } from "@/lib";
import { useTopMenuAction } from "./hooks/useTopMenyAction";
import { ItemDashboardGrid} from "./components/ItemDashboardGrid";
import { useItemDashboard } from "./hooks/useItemDashboard";

const Items = () => {
  const { createItemEvent } = useTopMenuAction();
  const { ref, rows, columns } = useItemDashboard();

  return (
    <>
      <Header title={"Items"} />
      <TopMenu onClickCreate={createItemEvent} onClickEdit={() =>{
        console.log(ref.current.getSelectedRows())
      }}/>
      {rows && <ItemDashboardGrid columns={columns} rows={rows} ref={ref}  />}
    </>
  );
};

export default Items;
