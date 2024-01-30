"use client";
import { DashboardGrid } from "@/lib";
import { usePordersDetails } from "../../hooks/usePordersDetails";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { ButtonCreate } from "@/lib";
import { GridCellEditStopParams, GridRowEditStopParams, MuiEvent } from "@mui/x-data-grid";


export const DetailsTab = () => {
  const { ref, columns, addNewRow, rows } = usePordersDetails();

  return (
    <>
      <ButtonCreate label="Add new line" sx={{mb: 2}} onClick={()=> {addNewRow()}}/>
      <DashboardGrid
        columns={columns}
        rows={rows }
        ref={
          ref as unknown as
            | React.Ref<React.MutableRefObject<GridApiCommunity>>
            | undefined
        }
        
        onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) =>{
          console.log(params)
        }}

        onRowEditStop={(params: GridRowEditStopParams, event: MuiEvent) =>{
          console.log(params)
        }}
      />
    </>
  );
};
