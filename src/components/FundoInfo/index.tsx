import { Box, Typography } from "@mui/material";
import Icon1 from "assets/img/icon1.png";
import Icon2 from "assets/img/icon2.png";
import Icon3 from "assets/img/icon3.png";
import Icon4 from "assets/img/icon4.png";
import Icon5 from "assets/img/icon5.png";
import { useIsSMDown } from "../../theme/useTheme";

export default function FundoInfo() {
  const isSm = useIsSMDown();
  const config = [
    {
      label: "Gemstone",
      value: "Diamonds",
      img: Icon1,
    },
    {
      label: "Diamonds (Carats) ",
      value: "8.81",
      img: Icon3,
    },
    {
      label: "Material",
      value: "​White gold",
      img: Icon5,
    },
    {
      label: "Made In",
      value: "Italy",
      img: Icon2,
    },
    {
      label: "Dimension​",
      value: "40.5 cm",
      img: Icon4,
    },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        width: isSm ? "280px" : "550px",
        minWidth: isSm ? "280px" : "550px",
        minHeight: isSm ? "unset" : "640px",
        paddingTop: "26px",
        "&:after": {
          content: `''`,
          display: isSm ? "none" : "block",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "150px",
          background: `linear-gradient(2.46deg, #000000 -10.63%, rgba(0, 0, 0, 0.36) 28.27%, rgba(0, 0, 0, 0) 98.37%)`,
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: isSm ? "24px" : "64px",
          lineHeight: "46px",
          marginBottom: isSm ? "32px" : "40px",
        }}
      >
        Foundo Name
      </Typography>
      <Box
        sx={{
          height: "48px",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: isSm ? 600 : 500,
            fontSize: isSm ? "13px" : "16px",
            color: isSm ? "D7D6D9" : "#959595",
          }}
        >
          Details
        </Typography>
        <Typography
          sx={{
            fontWeight: isSm ? 600 : 500,
            fontSize: isSm ? "14px" : "16px",
          }}
        >
          Ref: 356934
        </Typography>
      </Box>
      {config.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              height: "48px",
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "flex-start",
              }}
            >
              <img
                src={item.img}
                style={{
                  width: isSm ? "16px" : "20px",
                  height: isSm ? "16px" : "20px",
                  marginRight: "8px",
                }}
                alt=""
              />
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: isSm ? "13px" : "16px",
                  color: "#959595",
                }}
              >
                {item.label}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: isSm ? "14px" : "16px",
              }}
            >
              {item.value}
            </Typography>
          </Box>
        );
      })}
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: isSm ? "13px" : "16px",
          color: "#959595",
        }}
      >
        Description
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: isSm ? "14px" : "16px",
          color: "#959595",
        }}
      >
        {`Blossoming between the marvellous monuments of the Eternal City, Fiorever draws inspiration from the alluring four-petal flower that was cherished by the Romans as a symbol of happiness and joy. A blend of two meaningful words: Fiore - Italian for flower, and forever. Fiorever celebrates the Roman love for life with a free-spirited and passionate design. Designed to sparkle with an eternal glow, the precious floral icon is crafted with a corolla of the highest quality diamonds. Fiorever necklace in 18 kt white gold, set with round brilliant-cut diamonds and pavé diamonds.`}
      </Typography>
    </Box>
  );
}
