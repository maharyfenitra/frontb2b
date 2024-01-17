import { CreateNewOrderMutation } from "../mutation/CreateNewOrderMutation";
import { useGenericGraphqlMutation } from "./useGenericGraphqlMutation";

export const useCreateOrderMutation = () => {
  const mutation = useGenericGraphqlMutation<
    CreateNewOrderMutation,
    TVariableOrder
  >(new CreateNewOrderMutation());

  return mutation;
};

export type TVariableOrderDetails = {
  id?: string | undefined;
      itemId: string;
      label: string;
      qty: number;
      price: number;
}
export type TVariableOrder = {
  id?: string| undefined;
  supplierId: string;
  reference: string;
  description: string;
  orderDetailsInput: TVariableOrderDetails[]|[];
};
