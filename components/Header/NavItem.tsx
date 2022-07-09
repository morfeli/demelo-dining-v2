import Link from "next/link";
import { MouseEventHandler } from "react";

type NavItemProps = {
  content: string;
  closeMenu?: MouseEventHandler<HTMLLIElement> | undefined;
};

export const NavItem = ({ content, closeMenu }: NavItemProps) => {
  return (
    <Link href={`#${content}`}>
      <li
        onClick={closeMenu}
        className="text-slate-800 tracking-widest uppercase mx-8 cursor-pointer after:block after:w-0 after:h-0.5 after:bg-white after:transition-all duration-700 hover:after:w-full"
      >
        {content}
      </li>
    </Link>
  );
};
