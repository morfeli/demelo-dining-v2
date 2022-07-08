import InstagramSVG from "./InstagramSVG";
import LogoSVG from "./LogoSVG";

export const Footer = () => {
  return (
    <footer>
      <div>
        <LogoSVG />

        <hr />
        <ul>
          <li>About</li>

          <li>Catering</li>

          <li>Private Dining</li>

          <li>Contact</li>

          <li>Gallery</li>
        </ul>

        <InstagramSVG />
      </div>
    </footer>
  );
};
