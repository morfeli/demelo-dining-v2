import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        <NavItem content="About" />
        <NavItem content="Services" />
        <NavItem content="Gallery" />
        <NavItem content="Contact" />
      </ul>
    </nav>
  );
};
