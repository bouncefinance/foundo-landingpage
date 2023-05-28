import React from "react";
import { Box } from "@mui/material";
import One from "./components/one";
import OneMobile from "./components/oneMobile";
import Two from "./components/two";
import Four from "./components/four";
import VideoSection from "./components/video";
import MainImg from "../../assets/img/mainImg.png";
import mainProduct from "../../assets/img/mobile/mainProduct.png";
import BgImg from "../../assets/img/back.png";
import MobileBgImg from "../../assets/img/mobile/bannerBg.png";
import Three from "../../components/Animation/three";
import Footer from "./components/footer";
import { useEffect } from "react";
import { useIsSMDown } from "../../theme/useTheme";
import ProductCard from "../../components/ProductCard";
import FundoInfo from "../../components/FundoInfo";
import ArtistCard from "../../components/ArtistCard";
import CenterSection from "components/CenterSection";

const Home: React.FC = () => {
  const isMd = useIsSMDown();
  const getScrollCount = (event: { target: any }) => {
    console.log("top>>>", event.target.scrollTop);
  };
  const initAnimation = () => {
    console.log("123");
  };
  useEffect(() => {
    const scrollBox = document.getElementById("scrollBox");
    window.addEventListener("ready", initAnimation);
    window.addEventListener("resize", initAnimation);
    if (scrollBox) {
      scrollBox.addEventListener("scroll", getScrollCount);
    }
    return () => {
      window.removeEventListener("ready", initAnimation);
      window.removeEventListener("resize", initAnimation);
      if (scrollBox) {
        scrollBox.removeEventListener("scroll", getScrollCount);
      }
    };
  }, []);
  return (
    <>
      {isMd && (
        <>
          <img
            src={mainProduct}
            style={{
              position: "fixed",
              top: 0,
              width: "180%",
              maxHeight: "100%",
              left: "50%",
              transform: "translate3D(-50%, 0, 0)",
            }}
            alt=""
          />
          <Box
            id={"scrollBoxMobile"}
            sx={{
              width: "100%",
              height: "100%",
              overflowX: "hidden",
              overflowY: "auto",
              backgroundColor: "#000",
              backgroundImage: `url(${MobileBgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
              backgroundPosition: "top center",
              backgroundAttachment: "fixed",
            }}
          >
            <OneMobile />
            <Two />
            <CenterSection
              style={{
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <>
                <ProductCard />
                <FundoInfo />
                <ArtistCard />
              </>
            </CenterSection>
            <VideoSection />
            <Four />
            <Footer />
          </Box>
        </>
      )}
      {!isMd && (
        <>
          <img
            src={MainImg}
            style={{
              position: "fixed",
              top: 0,
              maxWidth: "100%",
              maxHeight: "100%",
              left: "50%",
              transform: "translate3D(-50%, 0, 0)",
            }}
            alt=""
          />
          <Box
            id={"scrollBox"}
            sx={{
              width: "100%",
              height: "100%",
              overflowX: "hidden",
              overflowY: "auto",
              backgroundColor: "#000",
              backgroundImage: `url(${BgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
              backgroundPosition: "top center",
              backgroundAttachment: "fixed",
            }}
          >
            <One />
            <Two />
            <Three />
            <VideoSection />
            <Four />
            <Footer />
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
