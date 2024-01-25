"use client";
import validator from "@rjsf/validator-ajv8";
import { detailsSuppliersSchema, uiSchema } from "./schemas/detailsSchema";
import { Header, ObjectFieldTemplate } from "@/lib";
import { fields } from "./schemas/detailsSchema";
import { GenericForm } from "@/lib";
import SaveIcon from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useSupplierData } from "./hooks/useSupplierData";

const Details = () => {
  const { isSuccess, onSubmit, formData, onChange } = useSupplierData();

  return (
    <div>
      <Header title="Supplier Details" backUrl="/suppliers" />
      {isSuccess && <Alert severity="success">Item saved.</Alert>}
      <GenericForm
        schema={detailsSuppliersSchema}
        uiSchema={{
          ...uiSchema,
          "ui:ObjectFieldTemplate": ObjectFieldTemplate,
        }}
        validator={validator}
        onChange={onChange}
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

export default Details;
