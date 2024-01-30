import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { MoreButton } from "@/lib";
import { TVariableDashbord } from "@/lib";
import { useGridApiRef } from "@mui/x-data-grid";
import { useFindAllOrdersQuery, useFindAllItemsQuery } from "@/lib";
import { useRouter } from "next/navigation";

export const usePOrdersDashboard = (): TVariableDashbord & {
  handleEdit: React.MouseEventHandler<HTMLButtonElement>;
} => {
  const { data } = useFindAllOrdersQuery();

  const ref = useGridApiRef();
  const { push } = useRouter();

  const editPorder = (id: string) => {
    push(`porders/details/${id}`);
  };

  const handleEdit = () => {
    const selectedRow = ref.current.getSelectedRows();
    if (selectedRow.size === 1) {
      const id = Array.from(selectedRow)[0][1].id;
      editPorder(id);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "reference",
      headerName: "Reference",
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
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,

      renderCell: (params: GridRenderCellParams): React.ReactNode => {
        return <MoreButton handleEdit={() => editPorder(params.id as string)}/>;
      },
    },
  ];

  return {
    columns,
    ref,
    rows: data || [],
    handleEdit
  };
};
