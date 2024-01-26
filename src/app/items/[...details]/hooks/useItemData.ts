import { useParams } from "next/navigation";
import { FormEvent } from "react";
import { IChangeEvent } from "@rjsf/core";
import { useCreateItem } from "./useCreateItem";
import { useUpdateItem } from "./useUpdateItem";

export const useItemData = () => {
  const params = useParams();
  const id = params?.details[1];

  const { createNewItem, isCreationSuccess, formDataDefaultValue } =
    useCreateItem();
  const { updateItem, formData } = useUpdateItem(id as string);

  const onSubmit = (
    data: IChangeEvent<any, any, any>,
    event: FormEvent<any>
  ) => {
    
    if (id) {
      updateItem({
        updateItemInput: {
          ...data.formData,
        },
      });
      return;
    }
    
    createNewItem(data.formData);
  };

  const onChange = (e: IChangeEvent) => {};

  return {
    onSubmit,
    formData: id ? formData : formDataDefaultValue,
    isSuccess: isCreationSuccess,
    onChange,
  };
};
