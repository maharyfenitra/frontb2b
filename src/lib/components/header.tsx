import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Header = ({ title }: { title: string }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: 4,
        justifyContent: "center",
        width: "100%",
        fontSize: 50,
        color: theme.palette.primary.main,
      }}
    >
      {title}
      <Divider />
    </Box>
  );
};
