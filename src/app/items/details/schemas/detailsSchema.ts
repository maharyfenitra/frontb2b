import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { ItemNameInput } from "../components/ItemNameInput";

export const detailsItemSchema: RJSFSchema = {
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title:", require: true},
    description: {
      type: "string",
      title: "Description:",
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
    "ui:field": "ItemNameInput",
    "ui:option" : {
      grid: {
        sx: 6
      }
    }
  },
  description: {
    "ui:classNames": "custom-class-description",
    "ui:field": "ItemNameInput",
  },
};

export const fields = {
  ItemNameInput: ItemNameInput,
};
