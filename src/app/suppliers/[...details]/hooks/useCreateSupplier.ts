import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useCreateSupplierMutation,
  TVariableSupplier,
} from "@/lib";

export const useCreateSupplier = () => {
    const { push } = useRouter();
    const {
        mutate: createNewSupplier,
        isSuccess: isCreationSuccess,
        data: createdSupplier,
      } = useCreateSupplierMutation();

      useEffect(() => {
        if (isCreationSuccess) {
          push(`/suppliers/details/${createdSupplier.createSupplier.id}`);
        }
      }, [isCreationSuccess]);

      return {createNewSupplier, isCreationSuccess, formDataDefaultValue}
}

const formDataDefaultValue: TVariableSupplier = {
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