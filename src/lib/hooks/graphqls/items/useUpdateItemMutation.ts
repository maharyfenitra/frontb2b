import { UpdateItemMutation } from "../../../mutation/UpdateItemMutation";
import { useGenericGraphqlMutation } from "../useGenericGraphqlMutation";
import { TVariableItem } from "@/lib";

export const useUpdateItemMutation = () => {
  const mutation = useGenericGraphqlMutation<
    UpdateItemMutation,
    {
      updateItemInput: TVariableItem;
    }
  >(new UpdateItemMutation());

  return mutation;
};