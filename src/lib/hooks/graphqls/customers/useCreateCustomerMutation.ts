import { CreateNewCustomerMutation } from "../../../mutation/CreateNewCustomerMutation "; 
import { useGenericGraphqlMutation } from "../useGenericGraphqlMutation";

export const useCreateCustomerMutation = () => {
  const mutation = useGenericGraphqlMutation<
  CreateNewCustomerMutation,
    TVariableCustomer
  >(new CreateNewCustomerMutation());

  return mutation;
};

export type TVariableCustomer = {
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
