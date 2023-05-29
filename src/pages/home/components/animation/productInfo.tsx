import ProductCard from "../../../../components/ProductCard";
import { Box } from "@mui/material";
import { useMemo } from "react";
import { useIsSMDown } from "../../../../theme/useTheme";

export enum AnimateStep {
  "notShow" = 0,
  "enterUp" = 1,
  "leaveLeft" = 2,
}
export default function ProductInfo({
  animationRatio,
  step,
}: {
  animationRatio?: string;
  step: AnimateStep;
}) {
  const isMd = useIsSMDown();
  const transformStr = useMemo(() => {
    let result = "translate3D(0, 0, 0)";
    switch (step) {
      case AnimateStep.enterUp:
        result = `translate3D(0, ${(1 - Number(animationRatio)) * 100}vh, 0)`;
        break;
      case AnimateStep.leaveLeft:
        result = `translate3D(-${Number(animationRatio) * 100}vw, 0, 0)`;
        break;
    }
    return result;
  }, [step, animationRatio]);
  const hideProductImg = useMemo(() => {
    return step === 1 && Number(animationRatio) < 1;
  }, [step, animationRatio]);
  return (
    <Box
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        marginTop: isMd ? "-180px" : "-320px",
        marginLeft: isMd ? "-129px" : "-229px",
        transform: transformStr,
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      gap={"120px"}
    >
      <ProductCard hideProductImg={hideProductImg} />
      <Box
        sx={{
          position: "relative",
          width: isMd ? "280px" : "550px",
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          width: isMd ? "258px" : "458px",
        }}
      ></Box>
    </Box>
  );
}
