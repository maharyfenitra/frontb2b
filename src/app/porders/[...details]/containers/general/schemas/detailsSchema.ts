import { RJSFSchema, UiSchema } from "@rjsf/utils";


export const detailsItemSchema: RJSFSchema = {
  type: "object",
  required: ["code", "description", "price", "label"],
  properties: {
    
    code: {
      type: "string",
      title: "Code:",
      require: true,
    },

  },
};

export const uiSchema: UiSchema = {
  
  code: {
    "ui:classNames": "custom-class-name",
  },
  
};

