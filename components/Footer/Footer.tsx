import { InstagramSVG } from "./InstagramSVG";
import { Logo } from "../Header/Logo";
import { NavItem } from "../Header/NavItem";

export const Footer = () => {
  return (
    <footer className="py-8">
      <ul className="flex flex-col items-center justify-between p-4 h-80">
        <Logo />
        <NavItem content="About" footer />
        <NavItem content="Services" footer />
        <NavItem content="Gallery" footer />
        <NavItem content="Contact" footer />
        <InstagramSVG />
      </ul>
    </footer>
  );
};
