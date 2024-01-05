import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Header = ({ title }: { title: string }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginBottom: 4,
        justifyContent: "center",
        width: "100vw",
        fontSize: 50,
        color: theme.palette.primary.main,
      }}
    >
      {title}
      <Divider />
    </Box>
  );
};
