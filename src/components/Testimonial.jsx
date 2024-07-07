import React from "react";
import user from "../assests/user.png";
const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Morris"}
          feedback={`Thank you for your prompt response.I was so impressed with the painting that I joined paypal just to make this purchase. I am eagerly anticipating receiving the painting `}
        />
        <TestimonialCard
          name={"Abhay"}
          feedback={
            "I want to let you know that I mounted the Abundance print and it is hanging in our dining room. Anyone who has seen it has been impressed as am I.Thank you for being the true artist that you are and all the best to you in the future."
          }
        />
        <TestimonialCard
          name={"Pawan"}
          feedback={
            "I love your painting!!!I just got it now. Thank you so much for your communication. Very nice to do business with you. I left a feedback for you..( I wish I could write more than 80 !!!). I would love to see more of your paintings...very very wonderful! , so please keep working....You are the Best!!! Thank you very much, again"
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src={user}
      alt="user"
    />
    <h4>{name}</h4>
    <p>&ldquo;{feedback}&rdquo;</p>
  </article>
);

export default Testimonial;
