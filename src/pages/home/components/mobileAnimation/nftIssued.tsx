import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { useIsSMDown } from "../../../../theme/useTheme";
import D3 from "assets/img/D3.png";
import D4 from "assets/img/D4.png";
import CenterSection from "components/CenterSection";
import { AnimateStep } from "pages/home/components/pcAnimation/threeCard";
export default function NftIssued({
  animationRatio,
  step,
}: {
  animationRatio?: string;
  step: AnimateStep;
}) {
  const isSm = useIsSMDown();
  const transformContent = useMemo(() => {
    let leftTransform = "translate3D(0, 0, 0)";
    let rightTransform = "translate3D(0, 0, 0)";
    switch (step) {
      case AnimateStep.enter:
        leftTransform = `translate3D(${
          (1 - Number(animationRatio)) * 100
        }vw, 0, 0)`;
        rightTransform = `translate3D(-${
          (1 - Number(animationRatio)) * 100
        }vw, 0, 0)`;
        break;
      case AnimateStep.leave:
        leftTransform = `translate3D(0, -${Number(animationRatio) * 100}vh, 0)`;
        rightTransform = `translate3D(0, -${
          Number(animationRatio) * 100
        }vh, 0)`;
        break;
    }
    return {
      leftTransform,
      rightTransform,
    };
  }, [step, animationRatio]);
  return (
    <Box
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CenterSection
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: isSm ? "30px" : "94px",
          transform: transformContent.leftTransform,
        }}
      >
        <>
          <Typography
            sx={{
              fontWeight: 100,
              fontSize: isSm ? "56px" : "200px",
              textAlign: "center",
              fontFamily: "Public Sans",
              fontStyle: "italic",
              lineHeight: isSm ? "40px" : "145px",
              color: "rgba(255, 255, 255, 0.8)",
              whiteSpace: "nowrap",
            }}
          >
            NFT ISSUED
          </Typography>
          <img
            src={D3}
            style={{
              display: "block",
              width: isSm ? "50px" : "144px",
            }}
            alt=""
          />
        </>
      </CenterSection>
      <CenterSection
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "flex-start",
          alignItems: "center",
          transform: transformContent.rightTransform,
        }}
      >
        <>
          <img
            src={D4}
            style={{
              display: "block",
              width: isSm ? "50px" : "144px",
            }}
            alt=""
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: isSm ? "56px" : "200px",
              textAlign: "center",
              fontFamily: "Public Sans",
              fontStyle: "italic",
              lineHeight: isSm ? "40px" : "145px",
              color: "rgba(255, 255, 255, 0.8)",
              whiteSpace: "nowrap",
            }}
          >
            BY FOUNDO
          </Typography>
        </>
      </CenterSection>
    </Box>
  );
}
