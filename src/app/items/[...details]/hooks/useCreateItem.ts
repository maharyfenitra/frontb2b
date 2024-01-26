import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useCreateItemMutation,
  TVariableItem,
} from "@/lib";

export const useCreateItem = () => {
    const { push } = useRouter();
    const {
        mutate: createNewItem,
        isSuccess: isCreationSuccess,
        data: createdItem,
      } = useCreateItemMutation();

      useEffect(() => {
        if (isCreationSuccess) {
          push(`/Items/details/${createdItem.createItem.id}`);
        }
      }, [isCreationSuccess]);

      return {createNewItem, isCreationSuccess, formDataDefaultValue}
}

const formDataDefaultValue: TVariableItem = {
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