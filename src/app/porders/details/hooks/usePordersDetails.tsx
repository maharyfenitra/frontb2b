import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import { useGridApiRef } from "@mui/x-data-grid";
import { useMemo } from "react";

import { TVariableDashbord, MoreButton } from "@/lib";
import { ComboBox } from "../components/ItemEdit/Combo";
import { TVariableOrder, TVariableOrderDetails } from "@/lib";
import { orderDetailsInformationState } from "../states/orderDetailsInformationState";
import { useRecoilState } from "recoil";

export const usePordersDetails = (): TVariableDashbord & {
  addNewRow: () => any;
} => {
  const ref = useGridApiRef();

  const [orderDetailsInformation, setOrderDetailsInformation] =
    useRecoilState<TVariableOrder>(orderDetailsInformationState);

  const addNewRow = () => {
    let l = orderDetailsInformation.orderDetailsInput.length.toString();
    setOrderDetailsInformation({
      ...orderDetailsInformation,
      orderDetailsInput: [
        ...orderDetailsInformation.orderDetailsInput,
        {
          id: l,
          label: "Empty",
          itemId: "",
          price: 0,
          qty: 0,
        } as TVariableOrderDetails,
      ],
    });
  };
  const handleSelectItem=(id: string, ligne: TVariableOrderDetails) => {
    setOrderDetailsInformation({
      ...orderDetailsInformation,
      orderDetailsInput:
        orderDetailsInformation.orderDetailsInput.map((elt) => {
          if (elt.id === id) {
            return {
              itemId: ligne.id || "",
              label: ligne.label,
              price: ligne.price,
              qty: 0,
              id: id,
            };
          }
          return elt;
        }),
    });
  }
  const columns: GridColDef[] = useMemo(()=>[
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
      renderEditCell: (params: GridRenderEditCellParams) => {
        return (
          <ComboBox
            onChange={(t: TVariableOrderDetails) => handleSelectItem(params.id as string,t )}
            value={
              orderDetailsInformation.orderDetailsInput.find(
                (el) => el.id === params.id
              ) ||
              orderDetailsInformation.orderDetailsInput[
                orderDetailsInformation.orderDetailsInput.length - 1
              ]
            }
          />
        );
      },
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
        return params.row?.price * params.row?.qty;
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
        return <MoreButton />;
      },
    },
  ], [orderDetailsInformation]);
  return { columns, rows: [], ref, addNewRow };
};

type TypeDetails = {
  id: string;
  label: string;
  qty: number;
  price: number;
};
