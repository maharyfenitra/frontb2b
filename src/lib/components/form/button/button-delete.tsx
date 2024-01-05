import { Button } from "@mui/material";
import { ButtonPropsType } from "./types";

export const ButtonDelete = ({
  className,
  label,
  disabled,
  ...props
}: ButtonPropsType) => {
  return (
    <Button
      color="error"
      className={`${className}`}
      variant="contained"
      type="submit"
      disabled={disabled}
      {...props}
    >
      {label}
    </Button>
  );
};
