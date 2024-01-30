import { CreateNewItemMutation } from "../../../mutation/CreateNewItemMutation";
import { useGenericGraphqlMutation } from "../useGenericGraphqlMutation";

export const useCreateItemMutation = () => {
  const mutation = useGenericGraphqlMutation<
    CreateNewItemMutation,
    TVariableItem
  >(new CreateNewItemMutation());

  return mutation;
};

export type TVariableItem = {
  id?: string | undefined;
  code: string;
  label: string;
  description: string;
  price: number;
  userId: string;
};
