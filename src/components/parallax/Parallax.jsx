import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const Parallax = () => {
  const ref = useRef();
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = prefersReducedMotion ? undefined : useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg   = prefersReducedMotion ? undefined : useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={yText ? { y: yText } : undefined}>
        Creating Ideas
      </motion.h1>
      <motion.div className="mountains" aria-hidden="true" style={{ pointerEvents: "none" }} />
      <motion.div
        className="planets"
        style={{ ...(yBg ? { y: yBg } : {}), backgroundImage: `url(/sun.png)`, pointerEvents: "none" }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      <motion.div className="stars" style={yBg ? { x: yBg, pointerEvents: "none" } : { pointerEvents: "none" }} aria-hidden="true" />
    </div>
  );
};

export default Parallax;