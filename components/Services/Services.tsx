export const Services = () => {
  return (
    <section
      id="Services"
      className="flex flex-col p-8 leading-8 text-center md:px-18 md:text-lg"
    >
      <h1 className="self-center px-8 py-4 text-3xl border-2 border-white font-Nautigal">
        Services
      </h1>
      <div className="flex flex-col lg:flex-row lg:pt-10">
        <div className="lg:w-50vw lg:pr-10">
          <h2 className="py-4 text-2xl">Catering</h2>
          <p className="py-2">
            Your event is special to us. What's a memorable event without
            amazing food? From birthdays, holiday parties, office lunches,
            social events, let Demelo Dining help cater your next event.
          </p>
          <h3 className="py-4 text-lg">Events of all sizes</h3>
          <p className="py-2">
            Demelo Dining is aware of how special it is for you to host an
            event. Let us help you to add to the memorable experience. Demelo
            Dining's catering service is customized from start to finish! If
            there are any questions, special requests, allergies, just let us
            know so we can accomadate! Demelo Dining's catering team is ready to
            deliver a 5 star dining experience for you and your guests.
          </p>
        </div>
        <div className="self-center my-4">
          <video
            src="/assets/video/catering.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover shadow-2xl h-96 w-85vw rounded-3xl lg:w-50vw"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:pt-10">
        <div className="lg:w-50vw lg:pl-10">
          <h2 className="py-4 text-2xl">Private Dining</h2>
          <p className="py-2">
            Chef and his team are ready to execute the best dining experience
            you will have at the comfort of your own home. Sit back, enjoy your
            company and get ready for a memorable experience. From family
            gatherings to a private dinner of two, Demelo Dining is at your
            service.
          </p>
          <h3 className="py-4 text-lg">For any special occasion</h3>
          <p className="py-2">
            We know how special it is for you to invite family and loved ones to
            a private dinner event. Chef and his team are honored to bring their
            passion to your dining table. Get ready to be in awe with dishes
            full of color, flavour, and life.
          </p>
        </div>
        <div className="self-center my-4">
          <video
            className="object-cover shadow-2xl h-96 w-85vw rounded-3xl lg:w-50vw"
            src="/assets/video/private-dining.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
};
