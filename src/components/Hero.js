import React from "react";
import HeroImg from "../img/merch.png";
import { Link } from "react-router-dom";
import "../index.css";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#E0F4FF] to-[#EFFFE0] h-[900px] bg-no-repeat bg-cover bg-center py-20 relative">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center hero-text">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-primary mr-3"></div>AYANCAPITAL
            merch shop
          </div>
          <h1 className="text-[35px] leading-[1.2] font-semibold py-4 mb-4 mr-10 md:text-[45px]">
            Where innovation meets inspiration
            <br />
            <span className="font-light text-[26px] py-4">
              From statement-making t-shirts to functional backpacks, <br />{" "}
              each item is a testament to the innovative spirit of{" "}
              <span className="text-primary">ayancapital</span>
            </span>
          </h1>
          <Link
            className="self-start uppercase font-semibold cursor-pointer hover:text-primary"
            to={"/"}
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block hero-image">
          <img className="py-20" src={HeroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
