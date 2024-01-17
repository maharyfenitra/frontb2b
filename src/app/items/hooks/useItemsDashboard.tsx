import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useGridApiRef } from "@mui/x-data-grid";
import { useFindAllItemsQuery } from "@/lib";
import { TVariableDashbord, MoreButton } from "@/lib";


export const useItemsDashboard = (): TVariableDashbord => {
  const { data: rows } = useFindAllItemsQuery();
  const ref = useGridApiRef();


  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
     flex: 1,
    },
    {
      field: "label",
      headerName: "Label",
      flex: 2,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 4,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      align: "right",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      align: "right",

      renderCell: (params: GridRenderCellParams): React.ReactNode => {
        //console.log(params);
        return <MoreButton />;
      },
    },
  ];
  return { columns, rows: rows||[], ref };
};
