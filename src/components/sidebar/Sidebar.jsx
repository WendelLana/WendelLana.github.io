import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(150vmax at 48px 48px)",
    transition: { type: "spring", stiffness: 20 },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
  },
};
const variantsLink = {
  open: { transition: { staggerChildren: 0.1 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
const itemVariants = { open: { y: 0, opacity: 1 }, closed: { y: 50, opacity: 0 } };

const Sidebar = () => {
  const items = [
    { label: "Homepage", href: "#Homepage" },
    { label: "Portfolio", href: "#Portfolio" },
    { label: "Services", href: "#Services" },
    { label: "Contact", href: "#Contact" },
    { label: "Amazon Store", href: "https://amzn.to/4d3jgpk", external: true },
  ];

  const [open, setOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    const el = document.documentElement;
    const prev = el.style.overflow;
    el.style.overflow = open ? "hidden" : prev || "";
    return () => { el.style.overflow = prev || ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <motion.aside 
      className={`sidebar ${open ? "is-open" : ""}`}
      animate={open ? "open" : "closed"}
      initial={false}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}>
      <motion.div className="bg" variants={variants} style={{ pointerEvents: open ? "auto" : "none" }}>
        <motion.nav className="links" variants={variantsLink} aria-label="Mobile menu" id="mobile-menu">
          {items.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              onClick={close}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.aside>
  );
};

export default Sidebar;
