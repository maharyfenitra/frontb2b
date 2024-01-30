import { Grid } from "@mui/material";
import { TextFieldStandard } from "@/lib";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import { SupplierInformation } from "./components/SupplierInformation";
import { useGeneralOrder } from "./hooks/useGeneralOrder";

export const GeneralsTab = () => {
  const {
    handleReferenceChange,
    handleSupplierChange,
    data,
    supplierValue,
    defaultSupplierValue,
    orderInformation,
  } = useGeneralOrder();

  return (
    <>
      <Typography variant="h5" component="h5" sx={{ my: 4 }}>
        Order information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextFieldStandard label={"Numero"} value={""} disabled />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Reference"}
            onChange={handleReferenceChange}
            defaultValue={orderInformation.reference}
          />
        </Grid>
        <Grid item xs={4}>
          <TextFieldStandard
            label={"Description"}
            defaultValue={orderInformation.description}
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={data}
            getOptionLabel={(option) => {
              return option?.name;
            }}
            sx={{ width: "100%" }}
            value={supplierValue}
            onChange={(e, value) => {
              handleSupplierChange(e, value || defaultSupplierValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Supplier Name"
                variant="standard"
                required
              />
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
      </Grid>
      <SupplierInformation value={supplierValue} />
    </>
  );
};
