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
  firstName: string;
  lastName: string;
  name: string;
  mail: string;
  adress: string;
  city: string;
  area: string;
  stat: string;
  nif: string;
  phoneNumber: string;
  description: string;
  contactMail: string;
  contactPhoneNumber: string;
  contactPost: string;
};
