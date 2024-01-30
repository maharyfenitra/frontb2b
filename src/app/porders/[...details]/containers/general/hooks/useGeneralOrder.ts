import { TVariableOrder } from "@/lib";
import { orderInformationState } from "../../../states/orderInformationState";
import { useRecoilState } from "recoil";
import { useFindAllSuppliersQuery, TypeSupplier } from "@/lib";
import { useState } from "react";

export const useGeneralOrder = () => {
  const { data } = useFindAllSuppliersQuery();
  const [orderInformation, setOrderInformation] = useRecoilState(
    
    orderInformationState
  );

  const [supplierValue, setSupplierValue] = useState<TypeSupplier>(defaultSupplierValue);

  const handleReferenceChange = (e: any) => {
    setOrderInformation((prev) => ({ ...prev, reference: e.target.value }));
  };

  const handleDescriptionChange = (e: any) => {
    setOrderInformation((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleSupplierChange = (e: any, value: TypeSupplier) => {
    setOrderInformation((prev) => ({
      ...prev,
      supplierId: value.id as string,
    }));
    setSupplierValue(value);
  };

  return {
    handleReferenceChange: handleReferenceChange as
      | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
    handleDescriptionChange: handleDescriptionChange as
      | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
      | undefined,
    orderInformation,
    data: data || [defaultSupplierValue],
    handleSupplierChange,
    supplierValue,
    defaultSupplierValue,
  };
};

const defaultSupplierValue: TypeSupplier = {
  id: "",
  firstName: "",
  lastName: "",
  name: "",
  phoneNumber: "",
  mail: "",
  adress: "",
  area: "",
  city: "",
  description: "",
  stat: "",
  nif: "",
  contactMail: "",
  contactPhoneNumber: "",
  contactPost: "",
};
