import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";
import { useGridApiRef } from "@mui/x-data-grid";

export const ItemDashboardGrid = React.forwardRef<
  React.MutableRefObject<GridApiCommunity>,
  ItemDashboardGridProps
>((props, ref) => {

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        apiRef={ref}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
});

ItemDashboardGrid.displayName = "ItemDashboardGrid";

type ItemDashboardGridProps = {
  columns: GridColDef[];
  rows: any[];
};
