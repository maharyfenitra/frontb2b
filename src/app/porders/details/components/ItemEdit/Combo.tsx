import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useFindAllItemsQuery } from "@/lib";
import { GridRenderEditCellParams } from "@mui/x-data-grid";

export const ComboBox = ({ callback }: { callback: any }) => {
  const { data } = useFindAllItemsQuery();
  const [value, setValue] = React.useState<{
    id: string;
    label: string;
    description: string;
  } | null>(null);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data || []}
      getOptionLabel={(option) => {
        return option.label;
      }}
      sx={{ width: "100%" }}
      value={value}
      onChange={(e, v) => {
        callback(v);
        setValue(v);
      }}
      renderInput={(params) => <TextField {...params} label="Choose Item" />}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            {option.label}
          </li>
        );
      }}
    />
  );
};
