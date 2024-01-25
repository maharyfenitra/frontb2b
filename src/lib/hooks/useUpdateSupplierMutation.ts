import { UpdateSupplierMutation } from "../mutation/UpdateSupplierMutation";
import { useGenericGraphqlMutation } from "./useGenericGraphqlMutation";
import { TVariableSupplier } from "@/lib";

export const useUpdateSupplierMutation = () => {
  const mutation = useGenericGraphqlMutation<
    UpdateSupplierMutation,
    {
      updateSupplierInput: TVariableSupplier;
    }
  >(new UpdateSupplierMutation());

  return mutation;
};
