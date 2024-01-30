import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useGridApiRef } from "@mui/x-data-grid";
import { useFindAllItemsQuery } from "@/lib";
import { TVariableDashbord, MoreButton } from "@/lib";
import { useRouter } from "next/navigation";

export const useItemsDashboard = (): TVariableDashbord & {
  handleEdit: React.MouseEventHandler<HTMLButtonElement>;
} => {
  const { data: rows } = useFindAllItemsQuery();
  const { push } = useRouter();
  const ref = useGridApiRef();
  const editSupplier = (id: string) => {
    push(`items/details/${id}`);
  };

  const handleEdit = () => {
    const selectedRow = ref.current.getSelectedRows();
    if (selectedRow.size === 1) {
      const id = Array.from(selectedRow)[0][1].id;
      editSupplier(id);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "code",
      headerName: "Code Item",
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
        return (
          <MoreButton handleEdit={() => editSupplier(params.id as string)} />
        );
      },
    },
  ];
  return { columns, rows: rows || [], ref, handleEdit };
};
