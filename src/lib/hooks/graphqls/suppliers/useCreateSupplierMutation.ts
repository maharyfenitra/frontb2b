import { CreateNewSupplierMutation } from "../../../mutation/CreateNewSupplierMutation ";
import { useGenericGraphqlMutation } from "../useGenericGraphqlMutation";

export const useCreateSupplierMutation = () => {
  const mutation = useGenericGraphqlMutation<
    CreateNewSupplierMutation,
    TVariableSupplier
  >(new CreateNewSupplierMutation());

  return mutation;
};

export type TVariableSupplier = {
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
