"use client";
import { FormProps } from "@rjsf/core";
import Form from "@rjsf/mui";
import { ObjectFieldTemplateProps } from "@rjsf/utils";
import { Grid } from "@mui/material";

export const GenericForm = (props: FormProps & { menu: React.ReactNode }): React.ReactNode => {

  const ObjectFieldTemplate = (object: ObjectFieldTemplateProps) => {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ margin: 4 }}>
            {props.menu}
          </Grid>
          {object.properties.map((element, index) => {
            return (
              <Grid item xs={4} key={index} sx={{ margin: 4 }}>
                {element.content}
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  };

  return (
    <Form
      {...props}
      uiSchema={{
        ...props.uiSchema,
        "ui:ObjectFieldTemplate": ObjectFieldTemplate,
      }}
    >
      <></>
    </Form>
  );
};
