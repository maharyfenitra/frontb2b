import { useFindOneSupplierQuery, TVariableSupplier } from "@/lib";
import { useUpdateSupplierMutation } from "@/lib";
import { useState, useEffect } from "react";

export const useUpdateSupplier = (id: string) => {
  const { mutate: updateSupplier, isSuccess: isUpdateSuccess } =
    useUpdateSupplierMutation();
  const { data, invalidate } = useFindOneSupplierQuery(id);

  const [formData, setFormData] = useState<TVariableSupplier>(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  useEffect(() => {
    invalidate();
  }, [isUpdateSuccess]);
  
  return {
    updateSupplier,
    formData,
  };
};
