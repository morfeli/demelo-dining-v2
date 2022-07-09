import Link from "next/link";

type NavItemProps = {
  content: string;
  footer?: boolean;
};

export const NavItem = ({ content, footer }: NavItemProps) => {
  if (footer) {
    return (
      <Link href={`#${content}`}>
        <li className="text-black tracking-widest uppercase mx-8 cursor-pointer after:block after:w-0 after:h-0.5 after:bg-white after:transition-all duration-700 hover:after:w-full">
          {content}
        </li>
      </Link>
    );
  }

  return (
    <Link href={`#${content}`}>
      <li className="text-white tracking-widest uppercase mx-8 cursor-pointer after:block after:w-0 after:h-0.5 after:bg-white after:transition-all duration-700 hover:after:w-full">
        {content}
      </li>
    </Link>
  );
};
