"use client";
import { Header } from "@/lib";
import Tab from "./Tab";
import { Box } from "@mui/material";
import { ButtonSave } from "@/lib";

const Details = () => {
  return (
    <div>
      <Header title="Details" backUrl="/sorders" />

      <Box
        sx={{
          margin: 4,
        }}
      >
        
        <Tab />
      </Box>
    </div>
  );
};

export default Details;
