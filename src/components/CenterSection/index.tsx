import { Box } from "@mui/material";
import { useIsSMDown } from "../../theme/useTheme";

interface CenterSectionParams {
  children?: JSX.Element;
  style?: React.CSSProperties;
}
export default function CenterSection(props: CenterSectionParams) {
  const isMd = useIsSMDown();
  const { children, style } = props;
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: isMd ? "350px" : "1200px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        margin: " 0 auto",
        ...style,
      }}
    >
      {children}
    </Box>
  );
}
