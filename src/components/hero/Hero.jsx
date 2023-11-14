import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ULUS KARAKOC</motion.h2>
          <motion.h1 variants={textVariants}>MERN Stack Developer</motion.h1>
          <motion.div className="button" variants={textVariants}>
            {" "}
            <motion.button>Contact Me</motion.button>
            <motion.button>Die letzten Projekte</motion.button>
          </motion.div>
        </motion.div>
        <motion.img
          variants={textVariants}
          animate="scrollButton"
          src="./scroll.png"
          alt=""
        />
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="./Bewerbungsfoto.jpg" alt="" />
      </div>
    </div>
  );
};
export default Hero;
