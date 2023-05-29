import { Box, Typography } from "@mui/material";
import D3 from "assets/img/D3.png";
import D4 from "assets/img/D4.png";
import D5 from "assets/img/D5.png";
import Icon6 from "assets/img/icon6.png";
import Icon7 from "assets/img/icon7.png";
import { useIsSMDown } from "../../../theme/useTheme";
import P1 from "assets/img/mobile/p1.png";
import X1 from "assets/img/mobile/x.svg";
export default function Four() {
  const isMd = useIsSMDown();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1400px",
        padding: "301px 0 360px",
        margin: "0 auto",
      }}
    >
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: isMd ? "30px" : "94px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 100,
            fontSize: isMd ? "56px" : "200px",
            textAlign: "center",
            fontFamily: "Public Sans",
            fontStyle: "italic",
            lineHeight: isMd ? "40px" : "145px",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          NFT ISSUED
        </Typography>
        <img
          src={D3}
          style={{
            display: "block",
            width: isMd ? "50px" : "144px",
          }}
          alt=""
        />
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        mb={"272px"}
      >
        <img
          src={D4}
          style={{
            display: "block",
            width: isMd ? "50px" : "144px",
          }}
          alt=""
        />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: isMd ? "56px" : "200px",
            textAlign: "center",
            fontFamily: "Public Sans",
            fontStyle: "italic",
            lineHeight: isMd ? "40px" : "145px",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          BY FOUNDO
        </Typography>
      </Box>
      <Box
        style={{
          width: "100%",
          maxWidth: "950px",
          margin: "0 auto",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: isMd ? "14px" : "36px",
            textAlign: "center",
            color: "#959595",
          }}
        >
          {`FOUNDO® is a new luxury brand that uses the latest in blockchain technology, superior materials and world-class craftsmanship to provide customer-centric products and experiences. It has an extensive line of collections ranging from fine jewelry, home goods, bags, accessorized installations, artwork to NFTs - seeking to unite the virtual-reality world with inter-human verse.`}
        </Typography>
      </Box>
      {!isMd && (
        <Box
          sx={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            alignItems: "center",
          }}
          gap={"70px"}
        >
          <img
            src={Icon7}
            style={{
              display: "block",
              width: "135px",
            }}
            alt=""
          />
          <img
            src={D5}
            style={{
              display: "block",
              width: "532px",
            }}
            alt=""
          />
          <img
            src={Icon6}
            style={{
              display: "block",
              width: "114px",
            }}
            alt=""
          />
        </Box>
      )}
      {isMd && (
        <Box
          sx={{
            display: "flex",
            flexFlow: "column nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          gap={"60px"}
        >
          <img
            src={D5}
            style={{
              display: "block",
              width: "132px",
            }}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "center",
              alignItems: "center",
            }}
            gap={"50px"}
          >
            <img
              src={Icon7}
              style={{
                display: "block",
                width: "61px",
              }}
              alt=""
            />
            <img
              src={X1}
              style={{
                display: "block",
                width: "15px",
              }}
              alt=""
            />
            <img
              src={P1}
              style={{
                display: "block",
                width: "67px",
              }}
              alt=""
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
