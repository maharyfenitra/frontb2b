"use client"
import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";

export const DashboardGrid = React.forwardRef<
  React.MutableRefObject<GridApiCommunity>,
  DashboardGridProps
>((props, ref) => {
  return (<DataGrid
        sx={{ height: 400, width: "100%" }}
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        apiRef={
          ref as unknown as React.MutableRefObject<GridApiCommunity> | undefined
        }
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
  );
});

DashboardGrid.displayName = "ItemDashboardGrid";

type DashboardGridProps = {
  columns: GridColDef[];
  rows: any[];
};
