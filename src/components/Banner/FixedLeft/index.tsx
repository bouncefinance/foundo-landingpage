import { Box, Typography } from "@mui/material";
import P1 from "assets/img/banenrP1.png";
export default function FixedLeft({ style }: { style?: React.CSSProperties }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "140px",
        top: "20%",
        left: "-20px",
        transform: "translate3D(0, 0,0)",
        zIndex: 997,
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-start",
        alignContent: "center",
        ...style
      }}
    >
      <img
        src={P1}
        alt=""
        style={{
          width: "100%",
          marginBottom: "15px",
        }}
      />
      <Typography
        sx={{
          fontFamily: `'Inter'`,
          width: "100%",
          textAlign: "left",
          fontWeight: 400,
          fontSize: "12px",
        }}
      >
        THE BEST CERTIFIED MATERIALS
      </Typography>
    </Box>
  );
}
