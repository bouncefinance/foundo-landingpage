import { Box } from "@mui/material";
import { useMemo } from "react";
import D5 from "assets/img/D5.png";
import Icon6 from "assets/img/icon6.png";
import Icon7 from "assets/img/icon7.png";
import { AnimateStep } from "pages/home/components/pcAnimation/threeCard";
import X1 from "assets/img/mobile/x.svg";

export default function Partner({
  animationRatio,
  step,
}: {
  animationRatio?: string;
  step: AnimateStep;
}) {
  const transformContent = useMemo(() => {
    let leftTransform = "translate3D(0, 0, 0)";
    let centerTransform = "translate3D(0, 0, 0) scale(1)";
    let rightTransform = "translate3D(0, 0, 0)";
    switch (step) {
      case AnimateStep.enter:
        leftTransform = `translate3D(-${
          (1 - Number(animationRatio)) * 100
        }vw, 0, 0)`;
        centerTransform = `translate3D(0, ${
          (1 - Number(animationRatio)) * 100
        }vh, 0)`;
        rightTransform = `translate3D(${
          (1 - Number(animationRatio)) * 100
        }vw, 0, 0)`;
        break;
      case AnimateStep.rotate:
        leftTransform = `translate3D(0, 0, 0)`;
        centerTransform = `translate3D(0, 0, 0) rotateZ(${
          Number(animationRatio) * 360
        }deg)`;
        rightTransform = `translate3D(0, 0, 0)`;
        break;
      case AnimateStep.leave:
        leftTransform = `translate3D(0, -${Number(animationRatio) * 100}vh, 0)`;
        centerTransform = `translate3D(0, -${
          Number(animationRatio) * 100
        }vh, 0)`;
        rightTransform = `translate3D(0, -${
          Number(animationRatio) * 100
        }vh, 0)`;
        break;
    }
    return {
      leftTransform,
      centerTransform,
      rightTransform,
    };
  }, [step, animationRatio]);
  const showX = useMemo(() => {
    return (
      (step === AnimateStep.rotate && Number(animationRatio) >= 1) ||
      step === AnimateStep.leave
    );
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
          transform: transformContent.leftTransform,
        }}
        alt=""
      />
      {showX && (
        <img
          src={X1}
          style={{
            display: "block",
            width: "15px",
            transform: transformContent.centerTransform,
          }}
          alt=""
        />
      )}
      {!showX && (
        <img
          src={D5}
          style={{
            display: "block",
            width: "532px",
            transform: transformContent.centerTransform,
            zoom: step === AnimateStep.rotate ? 1 - Number(animationRatio) : 1,
          }}
          alt=""
        />
      )}

      <img
        src={Icon6}
        style={{
          display: "block",
          width: "114px",
          transform: transformContent.rightTransform,
        }}
        alt=""
      />
    </Box>
  );
}
