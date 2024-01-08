import { Grid } from "@mui/material";
import { ArrayFieldTemplateProps } from "@rjsf/utils";
export const ArrayFieldTemplate: React.FC<ArrayFieldTemplateProps> = (
  props: ArrayFieldTemplateProps
) => {

  return (
    <>
        {props.items.map((element, index) => {
          return (
            <Grid key={index} className="Template-grid-test">
                <h1>Fields</h1>
              {element.children}
              
            </Grid>
          );
        })}
    </>
  );
};
