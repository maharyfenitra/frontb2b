import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useCreateCustomerMutation,
  TVariableCustomer,
} from "@/lib";

export const useCreateCustomer = () => {
    const { push } = useRouter();
    const {
        mutate: createNewCustomer,
        isSuccess: isCreationSuccess,
        data: createdCustomer,
      } = useCreateCustomerMutation();

      useEffect(() => {
        if (isCreationSuccess) {
          push(`/customers/details/${createdCustomer.createCustomer.id}`);
        }
      }, [isCreationSuccess]);

      return {createNewCustomer, isCreationSuccess, formDataDefaultValue}
}

const formDataDefaultValue: TVariableCustomer = {
    firstName: "",
    lastName: "",
    name: "",
    mail: "",
    adress: "",
    city: "",
    area: "",
    stat: "",
    nif: "",
    description: "",
    contactMail: "",
    contactPost: "",
    contactPhoneNumber: "",
    phoneNumber: "",
  };