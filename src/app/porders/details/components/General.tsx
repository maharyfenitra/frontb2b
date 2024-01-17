import { Grid } from "@mui/material";
import { TextFieldStandard, useFindAllSuppliersQuery } from "@/lib";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import Typography from "@mui/material/Typography";

export const General = () => {
  const { data } = useFindAllSuppliersQuery();
  const [value, setValue] = useState<TypeSupplier | null>(null);

  return (
    <>
      <Typography variant="h5" component="h5" sx={{ mt: 4 }}>
        Order information
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextFieldStandard
              label={"Numero"}
              value={value?.adress || ""}
              disabled
            />
          </Grid>
          <Grid item xs={4}>
            <TextFieldStandard
              label={"Reference"}
            />
          </Grid>
          <Grid item xs={4}>
            <TextFieldStandard
              label={"Description"}
            />
          </Grid>
        </Grid>
      </Typography>
      <Typography variant="h5" component="h5" sx={{ mt: 4 }}>
        Company information
      </Typography>
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
              <TextField {...params} label="Supplier Name" variant="standard" required/>
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
          <TextFieldStandard
            label={"Adress"}
            value={value?.adress || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"City"}
            value={value?.city || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Area"}
            value={value?.area || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"stat"}
            value={value?.stat || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"nif"} value={value?.nif || ""} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"Company mail"} value={""} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Company phone number"}
            value={""}
            disabled
          />
        </Grid>
      </Grid>

      <Typography variant="h5" component="h5" sx={{ mt: 4 }}>
        Contact information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"First Name"}
            value={value?.firstName || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Last Name"}
            value={value?.lastName || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"Phone Number"} value={""} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Post"}
            value={value?.stat || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Contact mail"}
            value={value?.nif || ""}
            disabled
          />
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
};
