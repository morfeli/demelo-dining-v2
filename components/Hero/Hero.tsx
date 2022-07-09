import Image from "next/image";
import { motion } from "framer-motion";
import HeroImg from "../../public/assets/pics/herochris.jpg";
import { Video } from "./Video";

export const Hero: React.FC = ({}): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      id="Hero"
      className="flex flex-col px-4 py-8 md:justify-evenly font-Bai"
    >
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="flex flex-col items-baseline justify-between md:h-40 md:mt-10">
          <h1 className="text-2xl">Demelo Dining</h1>
          <p className="pt-4 text-md">
            Private Dining and Catering Hospitality Group
          </p>
          <p className="py-4">Redefining the private dining experience</p>
          <button className="px-4 py-2 font-bold bg-white rounded-full shadow-xl cursor-pointer">
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
            alt="Chef Demelo"
          />
        </div>
      </div>

      <Video />
    </motion.section>
  );
};
