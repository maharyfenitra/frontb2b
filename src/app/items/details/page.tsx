"use client";
import validator from "@rjsf/validator-ajv8";
import { detailsItemSchema, uiSchema } from "./schemas/detailsSchema";
import Form from "@rjsf/mui";
import { Header } from "@/lib";
import { fields } from "./schemas/detailsSchema";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Details = () => {
  return (
    <div>
      <Header title="Item Details " />
      <Form
        schema={detailsItemSchema}
        uiSchema={uiSchema}
        validator={validator}
        onChange={() => console.log("change")}
        onSubmit={() => console.log("submit")}
        onError={() => console.log("error")}
        fields={fields}
        
      />
    </div>
  );
};

export default Details;
