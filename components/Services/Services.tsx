export const Services = () => {
  return (
    <section>
      <h1>Services</h1>
      <div>
        <h2>Catering</h2>
        <p>
          Your event is special to us. What's a memorable event without amazing
          food? From birthdays, holiday parties, office lunches, social events,
          let Demelo Dining help cater your next event.
        </p>
        <h3>Events of all sizes</h3>
        <p>
          Demelo Dining is aware of how special it is for you to host an event.
          Let us help you to add to the memorable experience. Demelo Dining's
          catering service is customized from start to finish! If there are any
          questions, special requests, allergies, just let us know so we can
          accomadate! Demelo Dining's catering team is ready to deliver a 5 star
          dining experience for you and your guests.
        </p>
        <video
          src="/assets/video/catering.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover rounded-3xl w-72 h-96"
        />
      </div>
      <div>
        <h2>For any special occasion</h2>
        <p>
          We know how special it is for you to invite family and loved ones to a
          private dinner event. Chef and his team are honored to bring their
          passion to your dining table. Get ready to be in awe with dishes full
          of color, flavour, and life.
        </p>
        <video
          className="object-cover rounded-3xl w-72 h-96"
          src="/assets/video/private-dining.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};
