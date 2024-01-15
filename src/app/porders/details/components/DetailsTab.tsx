"use client";
import { DashboardGrid } from "@/lib";
import { usePordersDetails } from "../hooks/usePordersDetails";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { ButtonCreate } from "@/lib";

export const DetailsTab = () => {
  const { ref, rows, columns, addNewRow } = usePordersDetails();

  return (
    <>
      <ButtonCreate label="Add new line" sx={{mb: 2}} onClick={()=> {addNewRow()}}/>
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
