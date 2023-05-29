import { Typography } from "@mui/material";
import CenterSection from "components/CenterSection";
import { useMemo } from "react";

export enum AnimateStep {
  "notShow" = 0,
  "enterLeft" = 1,
  "leaveUp" = 2,
}
export default function TextAnimate({
  animationRatio,
  step,
}: {
  animationRatio?: string;
  step: AnimateStep;
}) {
  const transformStr = useMemo(() => {
    let result = "translate3D(0, 0, 0)";
    switch (step) {
      case AnimateStep.enterLeft:
        result = `translate3D(${100 - Number(animationRatio) * 100}%, 0, 0)`;
        break;
      case AnimateStep.leaveUp:
        result = `translate3D(${0 -
          (Number(animationRatio) * 100)
        }%, -${Number(animationRatio) * 100}vh, 0)`;
        break;
    }
    return result;
  }, [step, animationRatio]);
  return (
    <CenterSection
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        transform: "translate3d(-50%, -50%, 0)",
      }}
    >
      <Typography
        component={"span"}
        sx={{
          transform: transformStr,
          fontWeight: 500,
          fontSize: "300px",
          height: "217px",
          lineHeight: "217px",
          leadingTrim: "both",
          textEdge: "cap",
          textTransform: "uppercase",
          fontFeatureSettings: `'pnum' on, 'lnum' on`,
          color: "rgba(255, 255, 255, 0.2)",
          whiteSpace: "nowrap",
        }}
      >
        ANGEL HAND
      </Typography>
    </CenterSection>
  );
}
