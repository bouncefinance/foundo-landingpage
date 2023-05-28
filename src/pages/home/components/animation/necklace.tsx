import NecklaceJson from "assets/lottie/animatinDm4.json";
import { create } from "@lottiefiles/lottie-interactivity";
import { useEffect, useRef } from "react";
require("@lottiefiles/lottie-player");
const Necklace = ({
  style,
  animationRatio,
}: {
  style?: React.CSSProperties;
  animationRatio?: string;
}) => {
  const lottieEl = useRef<any>(null);
  useEffect(() => {
    if (lottieEl !== null && lottieEl.current) {
      //   const totalFrames = lottieEl.current?.getLottie()?.totalFrames;
      //   console.log("lottieEl>>>", lottieEl.current, totalFrames);
      // 4. configure the interactivity library
      create({
        mode: "scroll",
        player: '#lottie-player',
        container: "#animation1",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 128],
          },
        ],
      });
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
        width: "400px",
        height: "500px",
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
