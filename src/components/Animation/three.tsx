import ProductCard from "../ProductCard";
import FundoInfo from "../FundoInfo";
import ArtistCard from "../ArtistCard";
import { Box } from "@mui/material";
import { useMemo } from "react";
export enum AnimateStep {
  "notShow" = 0,
  "enterUp" = 1,
  "activeLeft" = 2,
  "leaveUp" = 3,
}
export default function Three({
  animationRatio,
  step,
}: {
  animationRatio?: string;
  step: AnimateStep;
}) {
  console.log("2Ratio>>", animationRatio, step);
  const transformStr = useMemo(() => {
    let result = "translate3D(0, 0, 0)";
    switch (step) {
      case 1:
        result = `translate3D(0, ${(1 - Number(animationRatio)) * 100}vh, 0)`;
        break;
      case 2:
        result = `translate3D(-${Number(animationRatio) * 100}%, 0, 0)`;
        break;
      case 3:
        result = `translate3D(-100%, -${Number(animationRatio) * 100}vh, 0)`;
        break;
    }
    return result;
  }, [step, animationRatio]);
  const hideProduct = useMemo(() => {
    return step === 1 && Number(animationRatio) < 1;
  }, [step, animationRatio]);
  return (
    <Box
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        marginTop: "-320px",
        marginLeft: "-229px",
        transform: transformStr,
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      gap={"120px"}
    >
      <ProductCard hideProduct={hideProduct} />
      <FundoInfo />
      <ArtistCard />
    </Box>
  );
}
