import "./sidebar.scss";
import Links from "./Links/Links";
import ToogleButton from "./toogleButton/ToogleButton";
import { useState } from "react";
import { motion } from "framer-motion";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToogleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
