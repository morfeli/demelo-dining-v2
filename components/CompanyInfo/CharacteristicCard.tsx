import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type CharacteristicCardProps = {
  id: string;
  src: StaticImageData;
  title: string;
  description: string;
};

const CharacteristicsCard = ({
  id,
  src,
  title,
  description,
}: CharacteristicCardProps) => {
  return (
    <li
      id={id}
      className="flex flex-col items-center justify-around p-4 my-4 overflow-hidden bg-grayOne rounded-xl md:last:col-span-2 lg:last:w-50vw lg:last:mx-auto"
    >
      <h1 className="text-xl text-logoMediumPurple">{title}</h1>
      <p>{description}</p>
      <motion.div
        animate={{ rotate: [0, 25, -25, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Image
          src={src}
          alt="svg"
          width={150}
          height={150}
          objectFit={"contain"}
        />
      </motion.div>
    </li>
  );
};

export default CharacteristicsCard;
