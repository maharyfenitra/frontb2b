import { Grid } from "@mui/material";
import { TextFieldStandard, useFindAllSuppliersQuery } from "@/lib";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

export const General = () => {
  const { data } = useFindAllSuppliersQuery();
  const [value, setValue] = useState< TypeSupplier| null>(null);
  
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Autocomplete
          
            disablePortal
            id="combo-box-demo"
            options={data || []}
            getOptionLabel={(option) => {
              return option?.name;
            }}
            sx={{ width: "100%" }}
            value={value}
            onChange={(e, v) => {
              setValue(v);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Supplier Name" variant="standard" />
            )}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.name}
                </li>
              );
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"Adress"} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"City"} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"Area"} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"stat"} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"nif"} disabled />
        </Grid>
      </Grid>
    </>
  );
};

type TypeSupplier = {
  id: string;
    name: string;
    description: string;
    adress: string;
    city: string;
    area: string;
    stat: string;
    nif: string;
    firstName: string;
    lastName: string;
    mail: string;
}