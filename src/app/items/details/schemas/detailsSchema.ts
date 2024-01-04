import { RJSFSchema, UiSchema, RegistryFieldsType, Field, FieldProps } from "@rjsf/utils";
import { TextFieldStandard } from "@/lib";

export const detailsItemSchema: RJSFSchema = {
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Item name", default: "New Item" },
    description: {
      type: "string",
      title: "Description",
      
    },
  },
};

export const uiSchema: UiSchema = {
  title: {
    "ui:classNames": "custom-class-name",
    "ui:field": "TextFieldStandard"
  },
  description: {
    "ui:classNames": "custom-class-description",
  },
};

export const fields = {
  TextFieldStandard: TextFieldStandard as unknown as  React.FC<FieldProps>,
};
