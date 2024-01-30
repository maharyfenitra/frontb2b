import { Grid } from "@mui/material";
import { TypeSupplier, TextFieldStandard } from "@/lib";
import Typography from "@mui/material/Typography";

export const SupplierInformation = (props: TypeProps) => {
  return (
    <>
      <Typography variant="h5" component="h5" sx={{ my: 4 }}>
        Supplier Information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Adress"}
            value={props.value?.adress || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"City"}
            value={props.value?.city || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Area"}
            value={props.value?.area || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"stat"}
            value={props.value?.stat || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"nif"} value={props.value?.nif || ""} disabled />
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

      <Typography variant="h5" component="h5" sx={{ my: 4 }}>
        Contact information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"First Name"}
            value={props.value?.firstName || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Last Name"}
            value={props.value?.lastName || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard label={"Phone Number"} value={""} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Post"}
            value={props.value?.stat || ""}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Contact mail"}
            value={props.value?.nif || ""}
            disabled
          />
        </Grid>
      </Grid>
    </>
  );
};

type TypeProps = {
    value:  TypeSupplier | null | undefined;
}
