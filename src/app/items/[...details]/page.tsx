"use client";
import validator from "@rjsf/validator-ajv8";
import { detailsItemSchema, uiSchema } from "./schemas/detailsSchema";
import { Header, ObjectFieldTemplate } from "@/lib";
import { fields } from "./schemas/detailsSchema";
import { GenericForm } from "@/lib";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import { IChangeEvent } from "@rjsf/core";
import Alert from '@mui/material/Alert';
import { useDetails } from "./hooks/useDetails";

const Details = () => {
  const {onSubmit, formData} = useDetails();
  
  return (
    <div>
      <Header title="Item Details"  backUrl="/items"/>
      {<Alert severity="success">Item saved.</Alert>}
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
