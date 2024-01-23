"use client";
import validator from "@rjsf/validator-ajv8";
import { detailsItemSchema, uiSchema } from "./schemas/detailsSchema";
import { Header, ObjectFieldTemplate } from "@/lib";
import { fields } from "./schemas/detailsSchema";
import { GenericForm } from "@/lib";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import { IChangeEvent } from "@rjsf/core";
import { FormEvent, useState } from "react";
import Alert from "@mui/material/Alert";
import { useCreateSupplierMutation, TVariableSupplier } from "@/lib";

const Details = () => {
  const [formData, setFormData] = useState<TVariableSupplier>({
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
  });
  const { mutate, isSuccess } = useCreateSupplierMutation();
  const onSubmit = (
    data: IChangeEvent<any, any, any>,
    event: FormEvent<any>
  ) => {
    setFormData((prev) => {
      return {
        ...prev,
        ...data.formData.title,
      };
    });
    
    mutate(data.formData);
  };
  return (
    <div>
      <Header title="Item Details" backUrl="/suppliers" />
      {isSuccess && <Alert severity="success">Item saved.</Alert>}
      <GenericForm
        schema={detailsItemSchema}
        uiSchema={{
          ...uiSchema,
          "ui:ObjectFieldTemplate": ObjectFieldTemplate,
        }}
        validator={validator}
        onChange={(e: IChangeEvent<any, any, any>) => {}}
        onSubmit={onSubmit}
        onError={() => console.log("error")}
        fields={fields}
        menu={
          <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
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
