import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import { useGridApiRef } from "@mui/x-data-grid";
import { useCallback, useMemo } from "react";

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
    let l = orderDetailsInformation?.orderDetails.length.toString();
    setOrderDetailsInformation({
      ...orderDetailsInformation,
      orderDetails: [
        ...orderDetailsInformation.orderDetails,
        {
          id: l+1,
          label: "Empty",
          itemId: "",
          price: 0,
          qty: 0,
        } as TVariableOrderDetails,
      ],
    });
  };

  const handleSelectItem= useCallback((rowId: string, item: TVariableOrderDetails) => {
    console.log('ite', item)
    setOrderDetailsInformation((prev)=>({
      ...prev,
      orderDetails:
      prev.orderDetails.map((orderDetail) => {
          if (orderDetail.id === rowId) {
            return {
              ...item,
              itemId: rowId || "",
            };
          }
          return orderDetail;
        }),
    }));
  }, [])

  const renderEditCell=(params: GridRenderEditCellParams) => {
    return (
      <ComboBox
        onChange={(row: TVariableOrderDetails) => handleSelectItem(params.id as string, row)}
        value={
          orderDetailsInformation.orderDetails.find(
            (el) => el.id === params.id
          ) ||
          orderDetailsInformation.orderDetails[
            orderDetailsInformation.orderDetails.length - 1
          ]
        }
      />
    );
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
      renderEditCell: renderEditCell
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
  ], [orderDetailsInformation, handleSelectItem]);




  return { columns, rows: orderDetailsInformation.orderDetails || [], ref, addNewRow,  };
};
