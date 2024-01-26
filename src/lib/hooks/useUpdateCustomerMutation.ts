import { UpdateCustomerMutation } from "../mutation/UpdateCustomerMutation";
import { useGenericGraphqlMutation } from "./useGenericGraphqlMutation";
import { TVariableCustomer } from "@/lib";

export const useUpdateCustomerMutation = () => {
  const mutation = useGenericGraphqlMutation<
    UpdateCustomerMutation,
    {
      updateCustomerInput: TVariableCustomer;
    }
  >(new UpdateCustomerMutation());

  return mutation;
};