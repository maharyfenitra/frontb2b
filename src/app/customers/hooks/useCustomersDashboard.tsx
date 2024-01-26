import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { MoreButton } from "@/lib";
import { TVariableDashbord } from "@/lib";
import { useGridApiRef } from "@mui/x-data-grid";
import { useFindAllCustomersQuery } from "@/lib";
import { useRouter } from "next/navigation";

export const useCustomersDashboard = (): TVariableDashbord & {
  handleEdit: React.MouseEventHandler<HTMLButtonElement>;
} => {
  const { data } = useFindAllCustomersQuery();
  const { push } = useRouter();
  const ref = useGridApiRef();
  const editSupplier = (id: string) => {
    push(`customers/details/${id}`);
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
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 2,
    },

    {
      field: "adress",
      headerName: "Adress",
      flex: 1,
    },

    {
      field: "action",
      headerName: "Action",
      flex: 0.5,
      align: "right",

      renderCell: (params: GridRenderCellParams): React.ReactNode => {
        return (
          <MoreButton handleEdit={() => editSupplier(params.id as string)} />
        );
      },
    },
  ];

  return {
    columns,
    ref,
    rows: data || [],
    handleEdit,
  };
};
