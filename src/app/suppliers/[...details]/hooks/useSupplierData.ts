import { useParams } from "next/navigation";
import { FormEvent } from "react";
import { IChangeEvent } from "@rjsf/core";
import { useCreateSupplier } from "./useCreateSupplier";
import { useUpdateSupplier } from "./useUpdateSupplier";

export const useSupplierData = () => {
  const params = useParams();
  const id = params?.details[1];

  const { createNewSupplier, isCreationSuccess, formDataDefaultValue } =
    useCreateSupplier();
  const { updateSupplier, formData } = useUpdateSupplier(id as string);

  const onSubmit = (
    data: IChangeEvent<any, any, any>,
    event: FormEvent<any>
  ) => {
    if (id) {
      updateSupplier({
        updateSupplierInput: {
          ...data.formData,
        },
      });
      return;
    }
    createNewSupplier(data.formData);
  };

  const onChange = (e: IChangeEvent) => {};

  return {
    onSubmit,
    formData: id ? formData : formDataDefaultValue,
    isSuccess: isCreationSuccess,
    onChange,
  };
};
