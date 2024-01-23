import { CreateItemMutation, TVariable } from "../mutations/CreateItemMutation";
import { useGenericGraphqlMutation } from "@/lib";
export const useCreateItemMutation = () => {
    return useGenericGraphqlMutation<CreateItemMutation,TVariable>(new CreateItemMutation())
};
