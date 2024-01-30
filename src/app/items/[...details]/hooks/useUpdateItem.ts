import { useFindOneItemQuery, TVariableItem } from "@/lib";
import { useUpdateItemMutation } from "@/lib";
import { useState, useEffect } from "react";

export const useUpdateItem = (id: string) => {
  const { mutate: updateItem, isSuccess: isUpdateSuccess } =
    useUpdateItemMutation();
  const { data, invalidate } = useFindOneItemQuery(id);

  const [formData, setFormData] = useState<TVariableItem>(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  useEffect(() => {
    invalidate();
  }, [isUpdateSuccess]);
  
  return {
    updateItem,
    formData,
  };
};
