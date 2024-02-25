import React from "react";
import HeroImg from "../img/merch.png";
import { Link } from "react-router-dom";
import "../index.css";

const Hero = () => {
  return (
    // Hero section with background gradient and image
    <section className="bg-gradient-to-br from-[#E0F4FF] to-[#EFFFE0] h-[900px] bg-no-repeat bg-cover bg-center py-20 relative">
      {/* Container for centering content horizontally */}
      <div className="container mx-auto flex justify-around h-full">
        {/* Hero text content */}
        <div className="flex flex-col justify-center hero-text">
          {/* Title and description */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-primary mr-3"></div>Welcome to Ayan Capital Merch Shop
          </div>
          <h1 className="text-[35px] leading-[1.3] font-light py-4 mb-4 mr-10 md:text-[45px]">
            Your Ultimate Online Shopping Destination!
            <br />
            <span className="font-semibold py-4">
              Shop curated collections for the latest <br /> in fashion, decor,
              and tech.
            </span>
          </h1>
          {/* Link to discover more */}
          <Link
            className="self-start uppercase font-semibold cursor-pointer hover:text-primary"
            to={"/"}
          >
            Discover More
          </Link>
        </div>
        {/* Hero image (visible only on large screens) */}
        <div className="hidden lg:block hero-image">
          <img className="py-20" src={HeroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
