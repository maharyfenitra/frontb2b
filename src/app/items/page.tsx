"use client";
import { TopMenu } from "./components/TopMenu";
import { Header } from "@/lib";
import { useTopMenuAction } from "./hooks/useTopMenyAction";
import DataGridDemo from "./components/DataGridDemo";
import { useFindAllItemsQuery } from "./hooks/useFindAllItemsQuery";
import { GridColDef } from "@mui/x-data-grid";

const Items = () => {
  const { createItemEvent } = useTopMenuAction();
  const { data: rows  } = useFindAllItemsQuery();

  
  const columns: GridColDef[] = [
    {
      field: "id", headerName: "ID", width: 100
    },
    {
      field: "label", headerName: "Label", width: 100
    },
    {
      field: "description", headerName: "Description", width: 100
    }
  ]
  
  return (
    <>
      <Header title={"Items"} />
      <TopMenu onClickCreate={createItemEvent} />
      {
        rows && <DataGridDemo columns={columns} rows={rows} />
      }
      
    </>
  );
};

export default Items;
