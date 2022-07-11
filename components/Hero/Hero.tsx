import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import HeroImg from "../../public/assets/pics/herochris.jpg";
import { Video } from "./Video";

export const Hero: React.FC = ({}): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      id="Hero"
      className="flex flex-col px-4 py-8 md:justify-evenly font-Bai"
    >
      <div className="flex flex-col sm:flex-row sm:justify-around sm:items-baseline">
        <div className="flex flex-col items-baseline md:mt-10">
          <h1 className="py-4 text-2xl md:text-3xl">Demelo Dining</h1>
          <p className="py-4 text-md md:text-xl">
            Private Dining and Catering Hospitality Group
          </p>
          <p className="py-4 md:text-lg">
            Redefining the private dining experience
          </p>
          <Link href="#Contact">
            <button className="px-4 py-2 font-bold bg-white rounded-full shadow-xl cursor-pointer md:px-8 md:py-4">
              Contact
            </button>
          </Link>
        </div>

        <div className="self-center w-80 sm:w-96">
          <Image
            priority
            src={HeroImg}
            className="rounded-full"
            alt="Chef Demelo"
          />
        </div>
      </div>

      <Video />
    </motion.section>
  );
};
