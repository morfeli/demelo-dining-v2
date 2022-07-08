import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type GetStartedCardsProps = {
  id: number;
  number: string;
  title: string;
  description: string;
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const GetStartedCards = ({
  id,
  number,
  title,
  description,
}: GetStartedCardsProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <li
      id={id.toString()}
      className="flex flex-col items-center p-4 my-2 overflow-hidden bg-grayOne rounded-xl"
    >
      <div className="flex flex-col items-center w-10 h-10 rounded-full bg-lightGrayOne">
        <h1 className="text-logoMediumPurple">{number}</h1>
      </div>
      <h2 className="text-lg text-logoMediumPurple">{title}</h2>
      <motion.p
        ref={ref}
        variants={descriptionVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2 }}
        className="text-slate-700"
      >
        {description}
      </motion.p>
    </li>
  );
};

export default GetStartedCards;
