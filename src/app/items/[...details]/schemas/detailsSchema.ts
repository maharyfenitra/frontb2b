import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { ItemInput } from "../components/ItemInput";
import { ItemPrice } from "../components/ItemPrice";

export const detailsItemSchema: RJSFSchema = {
  type: "object",
  required: ["code", "description", "price", "label"],
  properties: {
    label: { type: "string", title: "Label:", require: true },
    
    code: {
      type: "string",
      title: "Code:",
      require: true,
    },

    description: {
      type: "string",
      title: "Description:",
      require: true,
    },

    price: {
      type: "number",
      title: "Price:",
    },
  },
};

export const uiSchema: UiSchema = {
  label: {
    "ui:classNames": "custom-class-name",
    "ui:field": "ItemInput",
  },

  code: {
    "ui:classNames": "custom-class-name",
    "ui:field": "ItemInput",
  },
  description: {
    "ui:classNames": "custom-class-description",
    "ui:field": "ItemInput",
  },

  price: {
    "ui:classNames": "custom-class-description",
    "ui:field": "ItemPrice",
    "ui:option": {
      type: "number",
    },
  },
};

export const fields = {
  ItemInput,
  ItemPrice,
};
