"use client";
import validator from "@rjsf/validator-ajv8";
import { detailsItemSchema, uiSchema } from "./schemas/detailsSchema";
import { Header, ObjectFieldTemplate } from "@/lib";
import { fields } from "./schemas/detailsSchema";
import { GenericForm } from "@/lib";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import { useCreateItemMutation } from "./hooks/useCreateItemMutation";
import { IChangeEvent } from "@rjsf/core";
import { FormEvent , useState} from "react";
import Alert from '@mui/material/Alert';

const Details = () => {
  const [formData, setFormData] = useState<FormDataType>({
    description: "Description of Item",
    title: "New Item",
    price: 0,
  });
  const { mutate, isSuccess } = useCreateItemMutation();
  const onSubmit = (
    data: IChangeEvent<any, any, any>,
    event: FormEvent<any>
  ) => {
    setFormData({
      title: data.formData.title,
      description: data.formData.description,
      price: data.formData.price
    })
    mutate({
      userId: "userTest",
      label: data.formData.title,
      description: data.formData.description,
      price: data.formData.price
    });
  };
  return (
    <div>
      <Header title="Item Details"  backUrl="/suppliers"/>
      {isSuccess && <Alert severity="success">Item saved.</Alert>}
      <GenericForm
        schema={detailsItemSchema}
        uiSchema={{
          ...uiSchema,
          "ui:ObjectFieldTemplate": ObjectFieldTemplate,
        }}
        validator={validator}
        onChange={(e: IChangeEvent<any, any, any>) => {
        }}
        onSubmit={onSubmit}
        onError={() => console.log("error")}
        fields={fields}
        menu={
          <Button
            variant="contained"
            type="submit"
            endIcon={<SaveIcon />}
            
          >
            Save
          </Button>
        }
        formData={formData}
      />
    </div>
  );
};
type FormDataType = {
  description: string;
  title: string;
  price: number;
};
export default Details;
