import { Box, styled } from "@mui/material";
import Logo from "assets/img/logo2.png";
import { Link } from "react-router-dom";
import { routes } from "routes/index";
import CenterSection from "components/CenterSection";
import ArrowRight from "assets/img/arrow-right.svg";
import { useIsSMDown } from "../../theme/useTheme";

const LinkItem = styled(Box)(() => ({
  fontFamily: `'Public Sans'`,
  fontWeight: 600,
  fontSize: 14,
  color: "#D7D6D9",
  height: 60,
  lineHeight: "60px",
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
  "&:hover": {
    "&:after": {
      width: "24px",
    },
  },
}));
export default function Header() {
  const isSm = useIsSMDown();
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
          <Link to={routes.home.index}>
            <img
              src={Logo}
              style={{
                cursor: "pointer",
                height: 22,
              }}
              alt={"Bounce"}
            />
          </Link>
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
                  <Link key={index} to={item.link}>
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
