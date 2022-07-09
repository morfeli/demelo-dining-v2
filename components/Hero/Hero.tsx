import Image from "next/image";
import HeroImg from "../../public/assets/pics/herochris.jpg";
import { Video } from "./Video";

export const Hero: React.FC = ({}): JSX.Element => {
  return (
    <section
      id="Hero"
      className="flex flex-col px-4 py-8 md:flex-row md:justify-evenly"
    >
      <div className="flex flex-col items-baseline justify-between h-32 md:h-40 md:mt-10">
        <h1>Demelo Dining</h1>
        <p>Private Dining and Catering Hospitality Group</p>
        <p>Insert more text here</p>
        <button className="px-2 py-1 font-bold bg-white rounded-full shadow-xl">
          Contact
        </button>
      </div>

      <div className="self-center">
        <Image
          priority={true}
          src={HeroImg}
          objectFit="contain"
          className="rounded-full"
          width={300}
          height={400}
        />
      </div>

      <Video />
    </section>
  );
};
