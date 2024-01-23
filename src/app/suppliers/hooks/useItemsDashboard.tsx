import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { MoreButton, useFindAllItemsQuery, useFindAllSuppliersQuery } from "@/lib";
import { TVariableDashbord } from "@/lib";
import { useGridApiRef } from "@mui/x-data-grid";

export const useItemsDashboard = (): TVariableDashbord=>{

    const ref = useGridApiRef();
    const {data} = useFindAllSuppliersQuery()
    const columns: GridColDef[] = [
        {
          field: "id",
          headerName: "ID",
          flex: 1
        },
        {
          field: "name",
          headerName: "Name",
          flex: 1
        },
        {
          field: "description",
          headerName: "Description",
          flex: 2
        },

        {
          field: "adress",
          headerName: "Adress",
          flex: 1
        },
    
        {
          field: "action",
          headerName: "Action",
          flex: 0.5,
          align: "right",
    
          renderCell: (params: GridRenderCellParams): React.ReactNode => {
            //console.log(params);
            return <MoreButton />;
          },
        },
      ];

    return {
        columns, ref, rows: data || []
    }
}