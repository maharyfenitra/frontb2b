import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { MoreButton } from "@/lib";
import { TVariableDashbord } from "@/lib";
import { useGridApiRef } from "@mui/x-data-grid";

export const usePInvoicesDashboard = (): TVariableDashbord=>{

    const ref = useGridApiRef();

    const columns: GridColDef[] = [
        {
          field: "id",
          headerName: "ID",
          width: 100,
        },
        {
          field: "label",
          headerName: "Label",
          width: 200,
        },
        {
          field: "description",
          headerName: "Description",
          width: 400,
        },
        {
          field: "price",
          headerName: "Price",
          width: 100,
        },
        {
          field: "action",
          headerName: "Action",
          width: 100,
    
          renderCell: (params: GridRenderCellParams): React.ReactNode => {
            //console.log(params);
            return <MoreButton />;
          },
        },
      ];

    return {
        columns, ref, rows: []
    }
}