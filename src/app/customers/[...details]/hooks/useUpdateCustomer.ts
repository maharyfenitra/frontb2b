import { useFindOneCustomerQuery, TVariableCustomer } from "@/lib";
import { useUpdateCustomerMutation } from "@/lib";
import { useState, useEffect } from "react";

export const useUpdateCustomer = (id: string) => {
  const { mutate: updateCustomer, isSuccess: isUpdateSuccess } =
    useUpdateCustomerMutation();
  const { data, invalidate } = useFindOneCustomerQuery(id);

  const [formData, setFormData] = useState<TVariableCustomer>(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  useEffect(() => {
    invalidate();
  }, [isUpdateSuccess]);
  
  return {
    updateCustomer,
    formData,
  };
};
