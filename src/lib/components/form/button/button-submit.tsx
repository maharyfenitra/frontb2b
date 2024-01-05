import { Button } from "@mui/material";
import { ButtonPropsType } from "./types";

export const ButtonSubmit = ({
  className,
  label,
  disabled,
  ...props
}: ButtonPropsType) => {
  return (
    <Button
      color="primary"
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
