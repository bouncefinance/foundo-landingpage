import { Box, styled, Typography } from "@mui/material";
import Logo from "assets/img/logo2.png";
import { Link } from "react-router-dom";
import { routes } from "routes/index";
import CenterSection from "components/CenterSection";
import ArrowRight from "assets/img/arrow-right.svg";
import { useIsSMDown } from "../../theme/useTheme";
import MenuAddIcon from "assets/img/mobile/add.svg";
import MenuDecIcon from "assets/img/mobile/dec.svg";
import { useState } from "react";
const LinkItem = styled(Typography)(() => ({
  fontFamily: `'Public Sans'`,
  fontWeight: 600,
  fontSize: 14,
  color: "#D7D6D9",
  height: 60,
  lineHeight: "60px",
  textDecoration: "none",
  "&:after": {
    content: `''`,
    display: "inline-block",
    width: "0",
    height: "18px",
    background: `url(${ArrowRight}) no-repeat center center / 100% auto`,
    verticalAlign: "middle",
    marginLeft: "8px",
    transition: "all .6s",
    overflow: "hidden",
  },
  "&.hover": {
    "&:after": {
      width: "24px",
    },
  },
  "&:hover": {
    "&:after": {
      width: "24px",
    },
  },
}));
export default function Header() {
  const isSm = useIsSMDown();
  const [isOpen, setIsOpen] = useState(false);
  const menuList = [
    {
      title: "TOKEN DETAILS",
      link: routes.tokenDetail.index,
    },
    {
      title: "AUCTION  DETAILS",
      link: routes.tokenDetail.index,
    },
    {
      title: "JOIN DISCORD",
      link: routes.tokenDetail.index,
    },
  ];
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 60,
        zIndex: 999,
      }}
    >
      <CenterSection
        style={{
          height: 60,
        }}
      >
        <>
          <Link
            to={routes.home.index}
            style={{
              zIndex: 999,
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <img
              src={Logo}
              style={{
                cursor: "pointer",
                height: 22,
              }}
              alt={"Bounce"}
            />
          </Link>
          {isSm && (
            <Box
              sx={{
                width: "60px",
                height: "60px",
                lineHeight: "60px",
                textAlign: "center",
                cursor: "pointer",
                zIndex: 998,
              }}
              onClick={() => {
                let resulte = !isOpen;
                setIsOpen(resulte);
              }}
            >
              {isOpen && <img src={MenuDecIcon} alt="" />}
              {!isOpen && <img src={MenuAddIcon} alt="" />}
            </Box>
          )}
          {isSm && isOpen && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                padding: "72px 24px 24px",
                background: "rgba(18, 18, 18, 0.6)",
                zIndex: 997,
              }}
              onClick={() => {
                setIsOpen(false);
              }}
              gap={"16px"}
            >
              {menuList.reverse().map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    style={{
                      textDecoration: "none",
                    }}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <LinkItem
                      key={index}
                      className={index === 0 ? "hover" : ""}
                    >
                      {item.title}
                    </LinkItem>
                  </Link>
                );
              })}
            </Box>
          )}
          {!isSm && (
            <Box
              sx={{
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "flex-end",
                alignItems: "center",
                height: 60,
              }}
              gap={"64px"}
            >
              {menuList.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <LinkItem key={index}>{item.title}</LinkItem>
                  </Link>
                );
              })}
            </Box>
          )}
        </>
      </CenterSection>
    </Box>
  );
}
