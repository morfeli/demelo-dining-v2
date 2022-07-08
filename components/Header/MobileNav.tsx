import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "./NavItem";
import { Logo } from "./Logo";
import classNames from "classnames";

type MobileNavProps = {
  isOpen: boolean;
  closeMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileNav = (props: MobileNavProps) => {
  let mobileMenuClass;

  if (props.isOpen) {
    mobileMenuClass = classNames(
      "block w-full px-2 absolute top-0 left-0 z-40"
    );
  } else {
    mobileMenuClass = classNames("hidden absolute ");
  }

  const navBarVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.nav
          aria-label="Site Navigation"
          role="navigation"
          className={mobileMenuClass}
          variants={navBarVariants}
          initial="closed"
          animate="open"
          transition={{ type: "spring", stiffness: 100 }}
          exit={{ opacity: 0, x: "-100%" }}
        >
          <ul className="flex flex-col items-center rounded-lg justify-evenly h-96 bg-slate-300">
            <NavItem content="About" />
            <NavItem content="Services" />
            <NavItem content="Gallery" />
            <NavItem content="Contact" />
            <Logo />
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
