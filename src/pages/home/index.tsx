import React from "react";
import { Box } from "@mui/material";
import One from "./components/one";
import OneMobile from "./components/oneMobile";
import Two from "./components/two";
import Four from "./components/four";
import VideoSection from "./components/video";
import BgImg from "../../assets/img/back.png";
import MobileBgImg from "../../assets/img/mobile/bannerBg.png";
import Three, { AnimateStep } from "../../components/Animation/three";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { useIsSMDown } from "../../theme/useTheme";
import ProductCard from "../../components/ProductCard";
import FundoInfo from "../../components/FundoInfo";
import ArtistCard from "../../components/ArtistCard";
import CenterSection from "components/CenterSection";
import Necklace from "./components/animation/necklace";

const Home: React.FC = () => {
  const isMd = useIsSMDown();
  const _AnimateHeight1 = 1000;
  const [animate1Ratio, setAnimate1Ratio] = useState<string>("0");
  const [animate2Ratio, setAnimate2Ratio] = useState<string>("0");
  const [animate2Step, setAnimate2Step] = useState<AnimateStep>(0);
  const [animate1Show, setAnimate1Show] = useState<boolean>(true);
  const [winH, setWinHeight] = useState<number>(window.innerHeight);
  const resizeWinH = () => {
    setWinHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeWinH);
    return () => {
      window.removeEventListener("resize", resizeWinH);
    };
  }, []);
  useEffect(() => {
    const getScrollCount = (event: { target: any }) => {
      console.log("event.target.scrollTop>>>", event.target.scrollTop);
      // set every animation range
      let animate1Range = [0, _AnimateHeight1 + 800]; // necklack down and scale
      let animate2Range = [_AnimateHeight1, _AnimateHeight1 + 800]; // card enter up
      let animate3Range = [_AnimateHeight1 + 800, _AnimateHeight1 + 800 + 1000]; // card left
      let animate4range = [
        _AnimateHeight1 + 800 + 1000,
        _AnimateHeight1 + 800 + 1000 + 1000,
      ]; // card leave up
      // necklack down and scale
      if (
        animate1Range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate1Range[1]
      ) {
        setAnimate1Ratio(
          (event.target.scrollTop / animate1Range[1]).toFixed(2)
        );
        setAnimate1Show(true);
      } else {
        setAnimate1Show(false);
      }
      // card enter up
      if (
        animate2Range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate2Range[1]
      ) {
        setAnimate2Ratio(
          (
            (event.target.scrollTop - animate2Range[0]) /
            (animate2Range[1] - animate2Range[0])
          ).toFixed(2)
        );
        setAnimate2Step(AnimateStep.enterUp);
      }
      // card active left
      if (
        animate3Range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate3Range[1]
      ) {
        setAnimate2Ratio(
          (
            (event.target.scrollTop - animate3Range[0]) /
            (animate3Range[1] - animate3Range[0])
          ).toFixed(2)
        );
        setAnimate2Step(AnimateStep.activeLeft);
      }
      // card leave up
      if (
        animate4range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate4range[1]
      ) {
        setAnimate2Ratio(
          (
            (event.target.scrollTop - animate4range[0]) /
            (animate4range[1] - animate4range[0])
          ).toFixed(2)
        );
        setAnimate2Step(AnimateStep.leaveUp);
      }
      event.target.scrollTop <= animate2Range[0] && setAnimate2Step(0);
    };
    const scrollBox = document.getElementById("scrollBox");
    if (scrollBox) {
      scrollBox.addEventListener("scroll", getScrollCount);
    }
    return () => {
      if (scrollBox) {
        scrollBox.removeEventListener("scroll", getScrollCount);
      }
    };
  }, [winH]);
  return (
    <>
      {isMd && (
        <>
          <Necklace />
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
          <Box
            id={"scrollBox"}
            sx={{
              position: "relative",
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
            <Box
              id={"animation1"}
              style={{
                width: "2px",
                height: `${_AnimateHeight1}px`,
                position: "absolute",
                left: 0,
                top: "99.9vh",
                background: "red",
                zIndex: 1,
              }}
            ></Box>
            {animate2Step !== 0 && (
              <Three step={animate2Step} animationRatio={animate2Ratio} />
            )}
            {animate1Show && <Necklace animationRatio={animate1Ratio} />}
            <One />
            <Two />
            <VideoSection />
            <Four />
            <Footer />
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: "0",
              top: 0,
              color: "red",
            }}
          >
            {animate1Ratio}
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
