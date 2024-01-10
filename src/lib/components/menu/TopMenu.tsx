import * as React from "react";
import Stack from "@mui/material/Stack";
import { ButtonEdit, ButtonCreate, ButtonDelete } from "@/lib";

export const TopMenu = (props: TopMenuPropsType) => {
  return (
    <Stack direction="row" spacing={2} sx={{ margin: 4 }}>
      <ButtonCreate label={"Create"} onClick={props.handleClickCreate}></ButtonCreate>
      <ButtonEdit label={"Edit"} onClick={props.handleClickEdit}></ButtonEdit>
      <ButtonDelete label={"Delete"} onClick={props.handleClickDelete}></ButtonDelete>
      {props.content}
    </Stack>
  );
};

type TopMenuPropsType = {
  handleClickCreate?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickEdit?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickDelete?: React.MouseEventHandler<HTMLButtonElement>;
  hideCreate?: boolean;
  hideEdit?: boolean;
  hideDelete?: boolean;
  content?: React.ReactNode;
};
