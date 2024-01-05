"use client";
import { useRef } from "react";
import validator from "@rjsf/validator-ajv8";
import { detailsItemSchema, uiSchema } from "./schemas/detailsSchema";
import Form from "@rjsf/mui";
import { Header, ObjectFieldTemplate } from "@/lib";
import { fields } from "./schemas/detailsSchema";

const Details = () => {
  const ref = useRef(null);

  return (
    <div>
      <Header title="Item Details " />
      <Form
        ref={ref}
        schema={detailsItemSchema}
        uiSchema={{
          ...uiSchema,
          "ui:ObjectFieldTemplate": ObjectFieldTemplate,
        }}
        validator={validator}
        onChange={() => console.log("change")}
        onSubmit={() => console.log("submit")}
        onError={() => console.log("error")}
        fields={fields}
        
      ><></></Form>
    </div>
  );
};

export default Details;
