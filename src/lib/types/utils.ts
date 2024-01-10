import { GridColDef } from "@mui/x-data-grid";
import { GridApiCommunity } from "@mui/x-data-grid/internals";

export type TVariableDashbord = {
    columns: GridColDef[];
    rows: any[];
    ref: React.MutableRefObject<GridApiCommunity>;
  };
  