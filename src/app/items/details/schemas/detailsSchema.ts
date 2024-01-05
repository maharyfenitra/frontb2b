import { RJSFSchema, UiSchema, FieldProps } from "@rjsf/utils";
import { TextFieldStandard, ArrayFieldTemplate } from "@/lib";
import { ItemNameInput } from "../components/item-name-input";

export const detailsItemSchema: RJSFSchema = {
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Item name", default: "New Item" , require: true},
    description: {
      type: "string",
      title: "Description",
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
