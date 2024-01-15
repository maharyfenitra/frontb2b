import { Button } from "@mui/material";
import { ButtonPropsType } from "./types";
import SaveIcon from "@mui/icons-material/Save";

export const ButtonSave = ({
  className,
  label,
  disabled,
  ...props
}: ButtonPropsType) => {
  return (
    <Button
      color="primary"
      className={`${className}`}
      endIcon={<SaveIcon />}
      variant="contained"
      type="submit"
      disabled={disabled}
      {...props}
    >
      {label}
    </Button>
  );
};
