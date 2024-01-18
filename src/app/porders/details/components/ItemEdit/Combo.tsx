import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useFindAllItemsQuery } from "@/lib";
import { GridRenderEditCellParams } from "@mui/x-data-grid";
import { TVariableOrderDetails } from "@/lib";

export const ComboBox = ({ onChange, value }: { onChange: (v: TVariableOrderDetails)=>void, value: TVariableOrderDetails }) => {
  
  const { data } = useFindAllItemsQuery();

  return (
    <Autocomplete
      disablePortal
      id="select-item"
      options={data || []}
      getOptionLabel={(option) => {
        return option.label;
      }}
      sx={{ width: "100%" }}
      value={value}
      
      onChange={(e, v) => {
        if(v)onChange(v as TVariableOrderDetails);
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
