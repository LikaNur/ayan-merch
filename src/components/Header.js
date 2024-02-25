import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { BsBag } from "react-icons/bs";

const Header = () => {
  // State management
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // Event listener for scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Header container with conditional styling based on scroll position
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      {/* Container for centering content horizontally */}
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Link to home page */}
        <Link to={"/"}>
          {/* Logo and site name */}
          <div className="py-4">
            <img className="h-[46px] w-full lg:h-[56px]" src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* Cart icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-3xl" />
          {/* Display item count in the cart */}
          <div className="bg-gray-200 animate-bounce absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-primary text-bold rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
