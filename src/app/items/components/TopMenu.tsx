import * as React from "react";
import Stack from "@mui/material/Stack";
import { ButtonEdit, ButtonCreate, ButtonDelete } from "@/lib";


export const TopMenu = (props: TopMenuPropsType) => {
  return (
    <Stack direction="row" spacing={2} sx={{margin: 4}}>
      <ButtonCreate label={"Create"} onClick={props.onClickCreate}></ButtonCreate>
      <ButtonEdit label={"Edit"} onClick={props.onClickEdit}></ButtonEdit>
      <ButtonDelete label={"Delete"}></ButtonDelete>
    </Stack>
  );
};

type TopMenuPropsType = {
    onClickCreate: React.MouseEventHandler<HTMLButtonElement>;
    onClickEdit: React.MouseEventHandler<HTMLButtonElement>;
}
