"use client";
import  React from "react";
import Form, { FormProps } from "@rjsf/core";
import  MuiForm from "@rjsf/mui";
import { ObjectFieldTemplateProps } from "@rjsf/utils";
import { Grid } from "@mui/material";
import { Ref } from "react";

export const GenericForm = React.forwardRef<Form, FormProps & { menu: React.ReactNode }>((props, ref): React.ReactNode => {

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
    <MuiForm
      {...props}
      uiSchema={{
        ...props.uiSchema,
        "ui:ObjectFieldTemplate": ObjectFieldTemplate,
      }}
      ref={ref as Ref<Form<any, any, any>> | undefined}
    >
      <></>
    </MuiForm>
  );
});

GenericForm.displayName = "GenericForm";
