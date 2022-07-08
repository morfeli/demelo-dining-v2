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
    <li id={id.toString()}>
      <div>
        <h1>{number}</h1>
      </div>
      <h2>{title}</h2>
      <motion.p
        ref={ref}
        variants={descriptionVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2 }}
      >
        {description}
      </motion.p>
    </li>
  );
};

export default GetStartedCards;
