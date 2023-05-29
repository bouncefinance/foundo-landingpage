import React from "react";
import { Box } from "@mui/material";
import One from "./components/one";
import OneMobile from "./components/oneMobile";
import TextAniamte, { AnimateStep as TwoStep } from "./components/textAnimate";
import Four from "./components/four";
import VideoSection from "./components/video";
import BgImg from "../../assets/img/back.png";
import MobileBgImg from "../../assets/img/mobile/bannerBg.png";
import ThreeCard, { AnimateStep } from "./components/animation/threeCard";
import ProductInfo, {
  AnimateStep as ProductInfoStep,
} from "./components/animation/productInfo";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { useIsSMDown } from "../../theme/useTheme";
import ProductCard from "../../components/ProductCard";
import FundoInfo from "../../components/FundoInfo";
import ArtistCard from "../../components/ArtistCard";
import CenterSection from "components/CenterSection";
import Necklace from "./components/animation/necklace";
import { BigNumber } from "bignumber.js";
const Home: React.FC = () => {
  const isMd = useIsSMDown();
  const _AnimateHeight1 = 1000;
  // 1. necklack
  const [animate1Ratio, setAnimate1Ratio] = useState<string>("0");
  // 2.product info
  const [animate2Ratio, setanimate2Ratio] = useState<string>("0");
  const [animate2Step, setanimate2Step] = useState<ProductInfoStep>(0);
  // 2.1 text
  const [animate2_1Ratio, setanimate2_1Ratio] = useState<string>("0");
  const [animate2_1Step, setanimate2_1Step] = useState<TwoStep>(0);
  // 3 three card
  const [animate3Ratio, setanimate3Ratio] = useState<string>("0");
  const [animate3Step, setanimate3Step] = useState<AnimateStep>(0);
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
      // 1. necklack down and scale
      let animate1Range = [0, _AnimateHeight1 + 800];
      // 2.product info enter up
      let animate2range = [_AnimateHeight1, _AnimateHeight1 + 800];
      // 2.1 text active left
      let animate2_1range = [_AnimateHeight1 + 400, _AnimateHeight1 + 1400];
      // 2.2 text leave up
      let animate2_2range = [_AnimateHeight1 + 1400, _AnimateHeight1 + 2400];
      // 3 three card enter up & hidden product info &  show product card in three carx
      let animate3range = [_AnimateHeight1 + 2000, _AnimateHeight1 + 2800];
      // three card active left
      //   let animate4Range = [_AnimateHeight1, _AnimateHeight1 + 800];
      // three card leave up
      //   let animate5Range = [_AnimateHeight1 + 800, _AnimateHeight1 + 800 + 800]; // card left
      //   let animate6Range = [
      //     _AnimateHeight1 + 800 + 800,
      //     _AnimateHeight1 + 800 + 800 + 800,
      //   ]; // card leave up

      // 1. necklack down and scale
      if (
        animate1Range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate1Range[1]
      ) {
        setAnimate1Ratio(
          BigNumber(event.target.scrollTop / animate1Range[1]).toFixed(2)
        );
        setAnimate1Show(true);
      } else {
        setAnimate1Show(false);
      }
      // 2. product info enter up
      if (
        animate2range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate2range[1]
      ) {
        const raiod = BigNumber(event.target.scrollTop - animate2range[0])
          .div(animate2range[1] - animate2range[0])
          .toFixed(2);
        setanimate2Ratio(Number(raiod) >= 0.95 ? "1" : raiod);
        setanimate2Step(ProductInfoStep.enterUp);
      }
      event.target.scrollTop <= animate2range[0] &&
        setanimate2Step(ProductInfoStep.notShow);
      // 2.1 text active left
      if (
        animate2_1range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate2_1range[1]
      ) {
        setanimate2_1Ratio(
          BigNumber(event.target.scrollTop - animate2_1range[0])
            .div(animate2_1range[1] - animate2_1range[0])
            .toFixed(2)
        );
        setanimate2_1Step(TwoStep.enterLeft);
      }
      // 2.2 text leave up
      if (
        animate2_2range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate2_2range[1]
      ) {
        setanimate2_1Ratio(
          BigNumber(event.target.scrollTop - animate2_2range[0])
            .div(animate2_2range[1] - animate2_2range[0])
            .toFixed(2)
        );
        setanimate2_1Step(TwoStep.leaveUp);
      }
      event.target.scrollTop <= animate2_1range[0] &&
        setanimate2_1Step(TwoStep.notShow);
      // 3. three card enter left
      if (
        animate3range[0] <= event.target.scrollTop &&
        event.target.scrollTop <= animate3range[1]
      ) {
        setanimate2Ratio(
          BigNumber(event.target.scrollTop - animate3range[0])
            .div(animate3range[1] - animate3range[0])
            .toFixed(2)
        );
        setanimate2Step(ProductInfoStep.leaveLeft);
        setanimate3Ratio(
          BigNumber(event.target.scrollTop - animate3range[0])
            .div(animate3range[1] - animate3range[0])
            .toFixed(2)
        );
        setanimate3Step(AnimateStep.enterLeft);
      }
      event.target.scrollTop <= animate3range[0] &&
        setanimate3Step(AnimateStep.notShow);
      event.target.scrollTop >= animate3range[1] + winH &&
        setanimate3Step(AnimateStep.notShow);
      // 3. three card enter up
      //   if (
      //     animate4Range[0] <= event.target.scrollTop &&
      //     event.target.scrollTop <= animate4Range[1]
      //   ) {
      //     setanimate3Ratio(
      //       (
      //         (event.target.scrollTop - animate4Range[0]) /
      //         (animate4Range[1] - animate4Range[0])
      //       ).toFixed(2)
      //     );
      //     setanimate3Step(AnimateStep.enterUp);
      //   }
      //   // 4.card active left
      //   if (
      //     animate5Range[0] <= event.target.scrollTop &&
      //     event.target.scrollTop <= animate5Range[1]
      //   ) {
      //     setanimate3Ratio(
      //       (
      //         (event.target.scrollTop - animate5Range[0]) /
      //         (animate5Range[1] - animate5Range[0])
      //       ).toFixed(2)
      //     );
      //     setanimate3Step(AnimateStep.activeLeft);
      //   }
      //   // 5.card leave up
      //   if (
      //     animate6Range[0] <= event.target.scrollTop &&
      //     event.target.scrollTop <= animate6Range[1]
      //   ) {
      //     setanimate3Ratio(
      //       (
      //         (event.target.scrollTop - animate6Range[0]) /
      //         (animate6Range[1] - animate6Range[0])
      //       ).toFixed(2)
      //     );
      //     setanimate3Step(AnimateStep.leaveUp);
      //   }
      //   event.target.scrollTop <= animate4Range[0] && setanimate3Step(0);
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
          <Box
            id={"scrollBox"}
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
            <Box
              id={"animation1"}
              style={{
                width: "2px",
                height: `${_AnimateHeight1}px`,
                position: "absolute",
                left: 0,
                top: "99.9vh",
                zIndex: 1,
              }}
            ></Box>
            {animate3Step !== 0 && (
              <ThreeCard step={animate3Step} animationRatio={animate3Ratio} />
            )}
            {animate1Show && <Necklace animationRatio={animate1Ratio} />}
            <OneMobile />
            <CenterSection
              style={{
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "200px",
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
            {animate2_1Step !== 0 && (
              <TextAniamte
                step={animate2_1Step}
                animationRatio={animate2_1Ratio}
              />
            )}
            {animate2Step !== 0 && (
              <ProductInfo step={animate2Step} animationRatio={animate2Ratio} />
            )}
            {animate3Step !== 0 && (
              <ThreeCard step={animate3Step} animationRatio={animate3Ratio} />
            )}
            {animate1Show && <Necklace animationRatio={animate1Ratio} />}
            <One />
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: `${_AnimateHeight1 + 2800}px`,
              }}
            ></Box>
            <VideoSection />
            <Four />
            <Footer />
          </Box>
          {/* <Box
            sx={{
              position: "absolute",
              right: "0",
              top: 0,
              color: "red",
            }}
          >
            animate1Ratio {animate1Ratio}
            animate2Ratio {animate2Ratio}
            animate2_1Ratio{animate2_1Ratio}
          </Box> */}
        </>
      )}
    </>
  );
};

export default Home;
