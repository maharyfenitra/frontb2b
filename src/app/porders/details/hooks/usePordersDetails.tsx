import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  GridRenderEditCellParams
} from "@mui/x-data-grid";
import { useGridApiRef } from "@mui/x-data-grid";
import { useState } from "react";

import { TVariableDashbord, MoreButton } from "@/lib";
import { ComboBox } from "../components/ItemEdit/Combo";

export const usePordersDetails = (): TVariableDashbord & {
  addNewRow: () => any;
} => {
  const [rows, setRows] = useState<T[]>([]);

  const ref = useGridApiRef();

  const addNewRow = () => {
    let l = rows.length.toString();
    setRows([
      ...rows,
      {
        id: l,
        label: "Empty",
        description: "",
        price: 0,
        qty: 0,
      },
    ]);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "label",
      headerName: "Item",
      flex: 2,
      editable: true,
      renderEditCell:(params: GridRenderEditCellParams)=>{
        console.log(params)
        return <ComboBox params={params}rows={rows} setRow={setRows}/>;
      },
    },
    {
      field: "description",
      headerName: "Description",
      flex: 4,
    },
    {
      field: "qty",
      headerName: "Quatity",
      flex: 1,
      align: "right",
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 2,
      align: "right",
      editable: true,
    },
    {
      field: "total",
      headerName: "Total",
      valueGetter: (params: GridValueGetterParams) => {
        return params.row?.price*params.row?.qty;
      },
      flex: 2,
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
  return { columns, rows, ref, addNewRow };
};

type T = {
  id: string;
  label: string;
  description: string;
  qty: number;
  price: number;
};
