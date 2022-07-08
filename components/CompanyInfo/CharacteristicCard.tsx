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
    <li id={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <motion.div
      // animate={{ rotate: [0, 25, -25, 0] }}
      // transition={{
      //   duration: 3,
      //   repeat: Infinity,
      // }}
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
