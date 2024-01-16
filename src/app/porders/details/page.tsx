"use client";
import { Header } from "@/lib";
import Tab from "./Tab";
import { ButtonSave } from "@/lib";
import { Box } from "@mui/material";


const Details = () => {
  return (
    <div>
      <Header title="Details" backUrl="/porders" />
      <Box sx={{ margin: 4 }}>
        <ButtonSave label="Save" onClick={() =>{}}/>
        <Tab />
      </Box>
    </div>
  );
};

export default Details;
