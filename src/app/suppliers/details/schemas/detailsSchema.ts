import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { SupplierInput } from "../components/SupplierInput";

export const detailsItemSchema: RJSFSchema = {
  type: "object",
  required: ["name", "adress", "description"],
  properties: {
    name: {
      type: "string",
      title: "Name",
    },

    description: {
      type: "string",
      title: "Description:",
    },
    adress: {
      type: "string",
      title: "Adress:",
    },
    phoneNumber: {
      type: "string",
      title: "Company phone number:",
    },
    mail: {
      type: "string",
      title: "Company mail:",
    },

    city: {
      type: "string",
      title: "City:",
    },

    area: {
      type: "string",
      title: "Area:",
    },

    nif: {
      type: "string",
      title: "Nif:",
    },

    stat: {
      type: "string",
      title: "Stat:",
    },

    firstName: {
      type: "string",
      title: "Contact First Name:",
    },

    lastName: {
      type: "string",
      title: "Contact Last Name:",
    },

    contactPost: {
      type: "string",
      title: "Contact Post:",
    },

    contactPhoneNumber: {
      type: "string",
      title: "Contact Phone Number:",
    },

    contactMail: {
      type: "string",
      title: "Contact Mail:",
    },
  },
};

export const uiSchema: UiSchema = {
  name: {
    "ui:classNames": "custom-class-name",
    "ui:field": "SupplierInput",
  },
  description: {
    "ui:classNames": "supplier-class-description",
    "ui:field": "SupplierInput",
  },

  adress: {
    "ui:classNames": "supplier-class-adress",
    "ui:field": "SupplierInput",
  },

  phoneNumber: {
    "ui:classNames": "supplier-class-adress",
    "ui:field": "SupplierInput",
  },

  mail: {
    "ui:classNames": "supplier-class-mail",
    "ui:field": "SupplierInput",
  },

  city: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },

  area: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },

  nif: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },

  stat: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },

  firstName: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },

  lastName: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },

  contactPost: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },

  contactPhoneNumber: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },

  contactMail: {
    "ui:classNames": "supplier-class-city",
    "ui:field": "SupplierInput",
  },
};

export const fields = {
  SupplierInput
};
