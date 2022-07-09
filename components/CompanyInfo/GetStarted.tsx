import GetStartedCards from "./GetStartedCards";

const DUMMY_STEPS = [
  {
    id: 0,
    number: "1",
    title: "Select your personalized experience",
    description:
      "Choose between either a catering or a private dining event. Upon discussing the details of your request, we will present you with a customized menu!",
  },
  {
    id: 1,
    number: "2",
    title: "Select number of guests",
    description:
      "Chef needs to prepare enough food for everyone to enjoy. Let us know how many guests will attend your event so we can properly prepare your experience.",
  },
  {
    id: 2,
    number: "3",
    title: "Select number of courses",
    description:
      "We recommend a three course meal for your first time experience. After that, you will want to experience Chefs seven course dining experience. Get ready to be blown away!",
  },
  {
    id: 3,
    number: "4",
    title: "Get in touch",
    description:
      "Fill out and submit our contact form. We will reach out to you to proceed with your submission.",
  },
];

const GetStarted = () => {
  return (
    <div className="py-8">
      <ul className="md:grid md:grid-cols-2 md:gap-8">
        {DUMMY_STEPS.map((item) => (
          <GetStartedCards
            id={item.id}
            key={item.id}
            number={item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default GetStarted;
