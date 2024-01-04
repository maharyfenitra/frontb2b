import { ButtonProps } from "@mui/material";

export type ButtonPropsType = ButtonProps & {
    /** Button label */
    label?: string | React.ReactNode;
    /** Flag telling that current button is submitng */
    /** Flag telling if button is disabled */
    disabled?: boolean;
    /** Override default btn-default class */
    overrideClassName?: string;
  };