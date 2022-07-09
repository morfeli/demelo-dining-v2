import CharacteristicsCard from "./CharacteristicCard";
import chefIcon from "../../public/assets/pics/chef.svg";
import cookingHat from "../../public/assets/pics/chefcap.svg";
import icecreamIcon from "../../public/assets/pics/icecream.svg";

const DUMMY_CHARACTERISTICS = [
  {
    id: "card1",
    src: chefIcon,
    title: "Local Ingredients",
    description:
      "All ingredients come from local distrubutors. We time our shopping so that every item is bought near the day of the event. Keeping things fresh.",
  },
  {
    id: "card2",
    src: cookingHat,
    title: "Integrity",
    description:
      "Demelo Dining is a team of likeminded individuals who share upstanding character traits and outstanding work ethics. Our motives, passion and focus translates into the overall guest dining experience. Demelo Dining's goals, beliefs and principles are its core foundation of the work we do. ",
  },
  {
    id: "card3",
    src: icecreamIcon,
    title: "Service",
    description:
      "Demelo Dining will be responsible for all steps of service. We want to ensure you and your guests sit back and enjoy the dining experience. Leave the set up and cleaning to us.",
  },
];

const Characteristics = () => {
  return (
    <div>
      <ul className="md:grid md:grid-cols-2 md:gap-8">
        {DUMMY_CHARACTERISTICS.map((item) => (
          <CharacteristicsCard
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Characteristics;
