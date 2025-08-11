import { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

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
    transtion: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variantsLink = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Sidebar = () => {
  const items = ["Homepage", "Services", "Contact", "Amazon Store"];
  const [open, setOpen] = useState(false);


  const toggleSidebar = () => setOpen(!open);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <motion.div className="links" variants={variantsLink}>
          {items.map((item) => (
            <motion.a
              href={item === 'Amazon Store' ? 'https://amzn.to/4d3jgpk' : `#${item}`}
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}>
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;