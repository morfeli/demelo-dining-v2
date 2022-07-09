import { InstagramSVG } from "./InstagramSVG";
import { Logo } from "../Header/Logo";
import { NavItem } from "../Header/NavItem";

export const Footer = () => {
  return (
    <footer className="py-8 md:px-8">
      <ul className="flex flex-col items-center justify-between p-4 h-80 md:flex-row md:h-min">
        <Logo />
        <NavItem content="About" />
        <NavItem content="Services" />
        <NavItem content="Gallery" />
        <NavItem content="Contact" />
        <InstagramSVG />
      </ul>
    </footer>
  );
};
