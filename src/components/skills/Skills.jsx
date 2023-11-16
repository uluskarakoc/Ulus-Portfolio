import "./skills.scss";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <div className="program">
          <motion.div
            className="boxCover"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
          >
            <div className="box">
              <img src="./react.png" alt="" />
            </div>
            <p>React JS</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box javascript">
              <img src="./javascript.png" alt="" />
            </div>
            <p>Javascript</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box">
              <img src="./html.png" alt="" />
            </div>
            <p>HTML</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box">
              <img src="./css.png" alt="" />
            </div>
            <p>CSS</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box">
              <img src="./sass.png" alt="" />
            </div>
            <p>Sass</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box">
              <img src="./rbootstrap.jpg" alt="" />
            </div>
            <p>React Bootstrap</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box">
              <img src="./git.png" alt="" />
            </div>
            <p>Git</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box">
              <img src="./framermotion.webp" alt="" />
            </div>
            <p>Framer Motion</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box">
              <img src="./nodejs.png" alt="" />
            </div>
            <p>Node JS</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box">
              <img src="./mongodb.png" alt="" />
            </div>
            <p>Mongo DB</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box " id="mongoose">
              <img src="./mongoose.png" alt="" />
            </div>
            <p>Mongoose</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            whileHover={{ scale: 1.2 }}
            className="boxCover"
          >
            <div className="box " id="express">
              <img src="./express.png" alt="" />
            </div>
            <p>Express</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
