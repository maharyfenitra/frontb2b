import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

export const Header = (props: PropsType) => {
  const theme = useTheme();
  const { push } = useRouter();
  return (
    <>
      <Box
        sx={{
          margin: 4,
          justifyContent: "center",
          width: "100%",
          fontSize: 50,
          color: theme.palette.primary.main,
        }}
      >
        {props.backUrl && (
          <Button variant="text" onClick={() => push(props.backUrl || "")}>
            <ArrowBackIosIcon />
          </Button>
        )}{" "}
        {props.title}
        <Divider />
      </Box>
    </>
  );
};

type PropsType = {
  title: string;
  backUrl?: string;
};
