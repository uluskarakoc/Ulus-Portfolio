import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ulus Karakoc
        </motion.span>
        <div className="social">
          <a href="https://www.xing.com/profile/Ulus_Karakoc">
            {" "}
            <img src="./xing.png" alt="" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/ulus-karako%C3%A7-7a7b101b0/">
            {" "}
            <img src="./linkedin.png" alt="" />{" "}
          </a>
          <a href="https://github.com/uluskarakoc">
            {" "}
            <img className="github" src="./github.png" alt="" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
