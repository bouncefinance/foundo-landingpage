import ProductCard from "../../../../components/ProductCard";
import FundoInfo from "../../../../components/FundoInfo";
import ArtistCard from "../../../../components/ArtistCard";
import { Box } from "@mui/material";
import { useMemo } from "react";
import { useIsSMDown } from "../../../../theme/useTheme";

export enum AnimateStep {
  "notShow" = 0,
  "enterLeft" = 1,
  "leaveUp" = 2,
}
export default function ThreeCard({
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
      case AnimateStep.enterLeft:
        result = `translate3D(-${Number(animationRatio) * 100}vw, 0, 0)`;
        break;
      case AnimateStep.leaveUp:
        result = `translate3D(-100%, -${Number(animationRatio) * 100}vh, 0)`;
        break;
    }
    return result;
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
      <ProductCard hideProduct={true} />
      <FundoInfo />
      <ArtistCard />
    </Box>
  );
}
