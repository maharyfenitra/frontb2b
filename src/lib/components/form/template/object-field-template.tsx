import Button from '@mui/material/Button';
import { ObjectFieldTemplateProps } from "@rjsf/utils";
import { Grid } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

export const ObjectFieldTemplate = (object: ObjectFieldTemplateProps) => {
  return (
    <>
      <Grid container spacing={2} >
        <Grid item xs={12} sx = {{margin: 4}}>
        <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
        Save
      </Button>
        </Grid>
        {object.properties.map((element, index) => {
          return (
            <Grid item xs={4} key={index} sx = {{margin: 4}}>
              {element.content}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
