import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCreateItemMutation, TVariableItem } from "@/lib";

export const useCreateItem = () => {
  const { push } = useRouter();
  const {
    mutate: createNewItem,
    isSuccess: isCreationSuccess,
    data: createdItem,
  } = useCreateItemMutation();

  useEffect(() => {
    if (isCreationSuccess) {
      push(`/items/details/${createdItem.createItem.id}`);
    }
  }, [isCreationSuccess]);

  return { createNewItem, isCreationSuccess, formDataDefaultValue };
};

const formDataDefaultValue: TVariableItem = {
  code: "",
  label: "",
  description: "",
  price: 0,
  userId: "657afc6418f168242f388b3c",
};
