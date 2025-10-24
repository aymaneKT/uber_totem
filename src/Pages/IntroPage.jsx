import { motion } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function IntroPage() {
  const navigate = useNavigate();
  const ref = useRef(null);
  return (
    <div className="overflow-hidden" onClick={() => navigate("/form", { viewTransition: true })}>
      {/* <motion.div
        animate={{
          transform: "translateX(0%)",
          transition: { duration: 2 },
        }}
        exit={{
          transform: "translateX(200%)",
          transition: { duration: 2 },
        }}
        className="absolute inset-0 bg-white z-50 -translate-x-full"
      ></motion.div> */}
      <div className="overflow-hidden cursor-pointer">
        <img
          src="images/0_map.png"
          className="h-screen object-cover object-center -z-10 absolute w-screen"
          loading="lazy"
        />
        <div className="bg-[#ffffffce] absolute top-0 left-0 right-0 bottom-0"></div>
        <h1 className="font-uber-medium font-medium z-10  text-center abs-center whitespace-nowrap text-responsive-title">
          Scopri il tasso di apertura <br /> dell’app Uber nel tuo comune.
        </h1>
        <span className="text-center absolute text-[#545454] text-responsive-subtitle left-1/2 -translate-x-1/2 bottom-[15%] font-medium font-uber-medium">
          Tocca per iniziare
        </span>
      </div>
    </div>
  );
}
