import { useParams } from "next/navigation";
import { FormEvent } from "react";
import { IChangeEvent } from "@rjsf/core";
import { useCreateCustomer } from "./useCreateCustomer";
import { useUpdateCustomer } from "./useUpdateCustomer";

export const useCustomerData = () => {
  const params = useParams();
  const id = params?.details[1];

  const { createNewCustomer, isCreationSuccess, formDataDefaultValue } =
    useCreateCustomer();
  const { updateCustomer, formData } = useUpdateCustomer(id as string);

  const onSubmit = (
    data: IChangeEvent<any, any, any>,
    event: FormEvent<any>
  ) => {
    
    if (id) {
      updateCustomer({
        updateCustomerInput: {
          ...data.formData,
        },
      });
      return;
    }
    
    createNewCustomer(data.formData);
  };

  const onChange = (e: IChangeEvent) => {};

  return {
    onSubmit,
    formData: id ? formData : formDataDefaultValue,
    isSuccess: isCreationSuccess,
    onChange,
  };
};
