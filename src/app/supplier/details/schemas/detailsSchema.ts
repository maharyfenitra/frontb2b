import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { ItemInput } from "../components/ItemInput";
import { ItemPrice } from "../components/ItemPrice";

export const detailsItemSchema: RJSFSchema = {
  type: "object",
  required: ["title","description", "price"],
  properties: {
    title: { type: "string", title: "Title:", require: true},
    description: {
      type: "string",
      title: "Description:",
      require: true
    },
    price: {
      type: "number",
      title: "Price:",
    },
  },
};

export const uiSchema: UiSchema = {
  
  title: {
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
    "ui:option" : {
      type: "number"
    }
  }
  
  
};

export const fields = {
  ItemInput,
  ItemPrice
};
