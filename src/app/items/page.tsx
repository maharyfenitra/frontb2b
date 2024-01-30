"use client";
import { TopMenu } from "@/lib";
import { Header , DashboardGrid} from "@/lib";
import { useTopMenuAction } from "./hooks/useTopMenyAction";
import { useItemsDashboard } from "./hooks/useItemsDashboard";
import { GridApiCommunity } from "@mui/x-data-grid/internals";

const Items = () => {
  const { createItemEvent } = useTopMenuAction();
  const { ref, rows, columns, handleEdit } = useItemsDashboard();

  return (
    <>
      <Header title={"Items"}/>
      <TopMenu
        handleClickCreate={createItemEvent}
        handleClickEdit={handleEdit}
      />
      <DashboardGrid
        columns={columns}
        rows={rows}
        ref={
          ref as unknown as
            | React.Ref<React.MutableRefObject<GridApiCommunity>>
            | undefined
        }
      />
    </>
  );
};

export default Items;
