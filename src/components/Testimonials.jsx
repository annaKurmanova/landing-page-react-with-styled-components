import React from "react";
import testimonials from "../data/testimonials.json";
import { TestimonialsStyled } from "./styles/Testimonials.styled";

const Testimonials = () => {
  return (
    <>
      <TestimonialsStyled>
        {testimonials.map((testimonial) => (
          <div>
            <p>{testimonial.body}</p>
            <span>
              <img src={testimonial.icon} />
              <span>
                <p>{testimonial.name}</p>
                <p>{testimonial.title}</p>
              </span>
            </span>
          </div>
        ))}
      </TestimonialsStyled>
    </>
  );
};

export default Testimonials;
