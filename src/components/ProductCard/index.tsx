import { Box, Typography, Grid } from "@mui/material";
import LineImg from "assets/img/line.svg";
import Icon1 from "assets/img/icon1.png";
import Icon2 from "assets/img/icon2.png";
import Icon3 from "assets/img/icon3.png";
import Icon4 from "assets/img/icon4.png";
import Icon5 from "assets/img/icon5.png";
import Icon6 from "assets/img/icon6.png";
import ProdIcon from "assets/img/mainImg.png";
import Logo from "assets/img/logo1.png";
import { useIsSMDown } from "../../theme/useTheme";

export default function ProductCard({ hideProduct }: { hideProduct?: boolean; }) {
  const isMd = useIsSMDown();
  const config = [
    {
      text: "Gemstone: Diamonds",
      img: Icon1,
    },
    {
      text: "Made In: Italy",
      img: Icon2,
    },
    {
      text: "Diamonds (Carats): 8.81",
      img: Icon3,
    },
    {
      text: "Dimension: 40.5 cm",
      img: Icon4,
    },
    {
      text: "Material​: White gold",
      img: Icon5,
    },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        width: isMd ? "258px" : "458px",
        height: isMd ? "360px" : "640px",
        background: "rgba(73, 73, 73, 0.11)",
        border: "2px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(1px)",
        borderRadius: "16px",
        padding: "26px 19px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: isMd ? "26px" : "37px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: isMd ? "14px" : "16px",
          }}
        >
          Details
        </Typography>
        <img
          src={LineImg}
          alt=""
          style={{
            height: isMd ? "8px" : "16px",
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: isMd ? "14px" : "16px",
          }}
        >
          Ref: 356934
        </Typography>
      </Box>
      <Grid container rowSpacing={"8px"}>
        {config.map((item, index) => {
          return (
            <Grid key={index} item xs={isMd ? 12 : 6}>
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "row nowrap",
                  justifyContent: isMd
                    ? "flex-start"
                    : (index + 1) % 2 === 0
                    ? "flex-end"
                    : "flex-start",
                  alignItems: "ceneter",
                }}
              >
                <img
                  src={item.img}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                  }}
                  alt=""
                />
                <Typography
                  sx={{
                    fontFamily: `'Inter'`,
                    color: "#959595",
                    fontSize: isMd ? "14px" : "16px",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <img
        src={ProdIcon}
        style={{
          position: isMd ? "absolute" : "relative",
          top: isMd ? "93px" : "0",
          width: isMd ? 250 : 420,
          height: isMd ? 250 : 420,
          objectFit: "contain",
          opacity: hideProduct ? 0 : 1,
          overflow: "hidden",
        }}
        alt=""
      />
      <img
        src={Logo}
        style={{
          position: "absolute",
          width: isMd ? 33 : 58,
          left: isMd ? 16 : 24,
          bottom: isMd ? 24 : 27,
          cursor: "pointer",
        }}
        alt=""
      />
      <img
        src={Icon6}
        style={{
          position: "absolute",
          width: isMd ? 24 : 44,
          right: isMd ? 16 : 24,
          bottom: isMd ? 24 : 30,
        }}
        alt=""
      />
    </Box>
  );
}
