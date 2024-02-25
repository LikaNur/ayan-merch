import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../img/footer_logo.svg";
import WhatsApp from "../img/whatsapp.svg";
import LinkedInIcon from "../img/linkedin.svg";
import InstagramIcon from "../img/instagram.svg";
import FacebookIcon from "../img/facebook.svg";
import SlackIcon from "../img/slack.svg";

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      <div className="container mx-auto flex flex-wrap  gap-16 justify-between items-center py-10 px-6 lg:px-0 ">
        <div className="flex flex-1 flex-wrap justify-between items-center mb-6 lg:mb-0 lg:flex-column">
          <Link to="/" className="flex items-center">
            <img
              className="h-[46px] w-full lg:h-[56px]"
              src={LogoFooter}
              alt="Logo"
            />
          </Link>
          <p className="text-lg mt-4 text-gray-400 pt-5 leading-[26px]">
            © 2024 Ayan Capital LTD are registered and supervised by the
            Financial Conduct Authority as an Annex 1 financial institution for
            anti-money laundering purposes only. Our Firm Reference Number is{" "}
            <span className="underline hover:text-primary cursor-pointer">
              1004344
            </span>
            . Registered in England &amp; Wales, under the number{" "}
            <span className="underline hover:text-primary cursor-pointer">
              15123809
            </span>{" "}
            and registered office address is 20 Wenlock Road, London, England,
            N1 7GU. Registered with the Information Commissioner’s Office in
            compliance with the Data Protection Regulations 2018 under
            registration{" "}
            <span className="underline hover:text-primary cursor-pointer">
              ZB613240
            </span>
            .
          </p>
          <div className="flex text-start py-4">
            <p className="text-lg hover:text-primary mr-4 cursor-pointer">
              Privacy Policy  
            </p>
            <span>·</span>
            <p className="text-lg hover:text-primary cursor-pointer">
              Cookies notice
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start">
          <div className="flex items-center text-lg mb-4">
            <p>0203 802 0292</p>
            <Link to="/" className="pl-4">
              <img src={WhatsApp} alt="WhatsApp" className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-lg mb-4">info@ayancapital.co.uk</p>
          <address className="not-italic text-lg text-gray-400">
            4th Floor, 1 Kingdom Street, Paddington Central, London, England, W2
            6BD
          </address>
          <div className="flex mt-4">
            <Link to="/" className="mr-4">
              <img src={LinkedInIcon} alt="LinkedIn" className="h-6 w-6" />
            </Link>
            <Link to="/" className="mr-4">
              <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
            </Link>
            <Link to="/" className="mr-4">
              <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
            </Link>
            <Link to="/" className="mr-4">
              <img src={SlackIcon} alt="Slack" className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
