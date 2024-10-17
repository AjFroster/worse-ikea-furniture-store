import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          Build Regrets, One Bolt at a Time
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Welcome to WorseThanIkea™, where every purchase is an adventure in
          frustration! Why settle for "challenging" when you can experience the
          true art of assembly-induced existential crisis? Our furniture comes
          with too many pieces, instructions that defy logic, and just the right
          amount of missing screws to make you question all your life choices.
          If you thought IKEA was tough, you’re not ready for this. Assembly
          tools? Optional. Extra parts? Always. Satisfaction? We’ll get back to
          you on that.
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
