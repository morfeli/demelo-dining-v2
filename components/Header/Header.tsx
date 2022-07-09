import { BrowserWidth } from "../../pages";
import { useState } from "react";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Header = ({ isMobile, innerWidth }: BrowserWidth): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };
  const closeMenuHandler = (): void => {
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <header
        id="Home"
        className="z-50 flex items-center justify-between w-full px-6 bg-lightGrayTwo"
      >
        <Logo />
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        <MobileNav isOpen={isOpen} closeMenu={closeMenuHandler} />
      </header>
    );
  } else {
    return (
      <header
        id="Home"
        className="flex items-center justify-between px-6 bg-lightGrayTwo"
      >
        <Logo />
        <Nav />
      </header>
    );
  }
};
