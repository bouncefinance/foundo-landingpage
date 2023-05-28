import { Typography } from "@mui/material";
import CenterSection from "components/CenterSection";

export default function Two() {
  return (
    <CenterSection
      style={{
        width: "100%",
        padding: "1207px 0",
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "300px",
          leadingTrim: "both",
          textEdge: "cap",
          textTransform: "uppercase",
          fontFeatureSettings: `'pnum' on, 'lnum' on`,
          color: "rgba(255, 255, 255, 0.2)",
          whiteSpace: "nowrap",
        }}
      >
        ANGEL HAND
      </Typography>
    </CenterSection>
  );
}
