import NecklaceJson from "assets/lottie/animatinDm4.json";
import { create } from "@lottiefiles/lottie-interactivity";

import { useEffect, useRef } from "react";
import { useIsSMDown } from "../../../../theme/useTheme";
require("@lottiefiles/lottie-player");

const Necklace = ({
  style,
  animationRatio,
}: {
  style?: React.CSSProperties;
  animationRatio?: string;
}) => {
  const isSm = useIsSMDown();
  const lottieEl = useRef<any>(null);
  useEffect(() => {
    const lottieIdEl = document.getElementById("lottie-player");
    if (lottieIdEl && lottieIdEl !== undefined) {
      // 4. configure the interactivity library
      try {
        create({
          mode: "scroll",
          player: lottieIdEl || "#lottie-player",
          container: "#animation1",
          actions: [
            {
              visibility: [0, 1],
              type: "seek",
              frames: [0, 128],
            },
          ],
        });
      } catch (error) {
        console.error('create lottie error')
      }
    }
  }, []);
  return (
    <lottie-player
      ref={lottieEl}
      id={"lottie-player"}
      autoplay={false}
      src={JSON.stringify(NecklaceJson)}
      loop={false}
      style={{
        position: "fixed",
        top: `${animationRatio ? Number(animationRatio) * 50 : 0}%`,
        width: isSm ? "80%" : "400px",
        height: isSm ? "auto" : "500px",
        left: "50%",
        transform: `translate3D(-50%, -${
          animationRatio ? Number(animationRatio) * 50 : 0
        }%, 0) scale(${1 - Number(animationRatio) * 0.55})`,
        ...style,
      }}
    ></lottie-player>
  );
};

export default Necklace;
