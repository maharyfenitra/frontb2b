"use client";
import { Header } from "@/lib";
import Tab from "./Tab";
import { ButtonSave } from "@/lib";
import { Box } from "@mui/material";
import { useCreateOrderMutation, TVariableOrder } from "@/lib";
import { orderDetailsInformationState } from "./states/orderDetailsInformationState";
import { useRecoilState } from "recoil";

const Details = () => {
  const { mutate } = useCreateOrderMutation();
  const [orderDetailsInformation, setOrderDetailsInformation] = useRecoilState(
    orderDetailsInformationState
  );

  return (
    <>
      <Header title="Details" backUrl="/porders" />
      <Box sx={{ margin: 4 }}>
        <ButtonSave
          label="Save"
          onClick={() => {
            console.log(orderDetailsInformation);
            if (orderDetailsInformation) {
              mutate(orderDetailsInformation);
            }
          }}
        />
        <Tab />
      </Box>
    </>
  );
};

export default Details;
