"use client";
import validator from "@rjsf/validator-ajv8";
import { detailsCustomersSchema, uiSchema } from "./schemas/detailsSchema";
import { Header, ObjectFieldTemplate } from "@/lib";
import { fields } from "./schemas/detailsSchema";
import { GenericForm } from "@/lib";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import { IChangeEvent } from "@rjsf/core";
import Alert from "@mui/material/Alert";
import { useCustomerData } from "./hooks/useCustomerData";

const Details = () => {
  const { onSubmit, isSuccess, formData } = useCustomerData();
  return (
    <div>
      <Header title="Customer Details" backUrl="/customers" />
      {isSuccess && <Alert severity="success">Item saved.</Alert>}
      <GenericForm
        schema={detailsCustomersSchema}
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
