"use client";
import { Header } from "@/lib";
import { OrderTabs } from "./components/OrderTabs";
import { ButtonSave } from "@/lib";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import { ButtonEdit, ButtonCreate, ButtonDelete } from "@/lib";
import { usePordersDetails } from "./hooks/usePordersDetails";

const Details = () => {
  const {handleClickSave} = usePordersDetails();

  return (
    <>
      <Header title="Details" backUrl="/porders" />
      <Box sx={{ margin: 4 }}>
        <Stack direction="row" spacing={2} sx={{ margin: 4 }}>
          <ButtonSave
            label="Save"
            onClick={handleClickSave}
          />
          <ButtonEdit label={"Duplicate"} color="info"></ButtonEdit>
          <ButtonEdit label={"Validate"} color="success"></ButtonEdit>
          <ButtonEdit label={"Settle"} color="secondary"></ButtonEdit>
          <ButtonDelete label={"Delete"}></ButtonDelete>
        </Stack>
        <OrderTabs />
      </Box>
    </>
  );
};

export default Details;
