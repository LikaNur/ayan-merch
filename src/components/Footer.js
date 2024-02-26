import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../img/footer_logo.svg";
import WhatsApp from "../img/whatsapp.svg";
import LinkedInIcon from "../img/linkedin.svg";
import InstagramIcon from "../img/instagram.svg";
import FacebookIcon from "../img/facebook.svg";
import SlackIcon from "../img/slack.svg";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-footer pb-[50px] pt-10 font-normal text-white sm:pb-20 sm:pt-20">
      <div className="container mx-auto">
        <Link
          to="/"
          className="mb-8 inline-block sm:mb-8 flex flex-shrink-0 sm:h-[56px] lg:flex-reverse "
        >
          <img className="h-[46px] lg:h-[56px]" src={LogoFooter} alt="Logo" />
        </Link>
        <section className="flex flex-col gap-5 lg:flex-row lg:gap-[40px]">
          <div className="lg:hidden">
            <Link className="mb-4 flex sm:mb-5">
              <span className="mr-3 text-base sm:text-lg sm:leading-[26px]">
                0203 802 0292
              </span>
              <img src={WhatsApp} alt="WhatsApp" className="h-6 w-6" />
            </Link>
            <Link className="text-base sm:text-lg sm:leading-[26px]">
              info@ayancapital.co.uk
            </Link>
            <address className="mt-4 not-italic">
              <p className="text-lg leading-[26px] text-base">
                4th Floor, 1 Kingdom Street, Paddington Central London, England,
                W2 6BD
              </p>
            </address>
          </div>
          <div className="flex-1">
            <p className="hidden text-base font-normal text-base sm:text-lg sm:leading-[26px] lg:block">
              © 2024 Ayan Capital LTD are registered and supervised by the
              Financial Conduct Authority as an Annex 1 financial institution
              for anti-money laundering purposes only. Our Firm Reference Number
              is <Link className="underline hover:text-primary">1004344</Link>.
              Registered in England &amp; Wales, under the number{" "}
              <Link className="underline hover:text-primary">15123809</Link> and
              registered office address is 20 Wenlock Road, London, England, N1
              7GU. Registered with the Information Commissioner’s Office in
              compliance with the Data Protection Regulations 2018 under
              registration{" "}
              <Link className="underline hover:text-primary">ZB613240</Link>.
            </p>
            <div className="hidden lg:block">
              <div className="flex items-center gap-2 text-base sm:text-lg sm:leading-[26px] lg:mt-[58px]">
                <Link className="hover:text-primary" href="/">
                  Privacy Policy
                </Link>
                <div className="text-base">·</div>
                <Link className="hover:text-primary" href="/">
                  Cookies notice
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="hidden lg:block">
              <Link className="mb-2 flex sm:mb-5">
                <span className="mr-3 text-base sm:text-lg sm:leading-[26px]">
                  0203 802 0292
                </span>
                <img src={WhatsApp} alt="WhatsApp" className="h-6 w-6" />
              </Link>
              <Link className="mb-2 flex text-base sm:mb-5 sm:text-lg sm:leading-[26px]">
                info@ayancapital.co.uk
              </Link>
            </div>
            <address className="hidden not-italic sm:mb-8 lg:block">
              <p className="text-lg leading-[26px] sm:text-base">
                4th Floor, 1 Kingdom Street, Paddington Central
                <br /> London, England, W2 6BD
              </p>
            </address>
            <div className="social-media-links flex items-center gap-6 lg:mt-[58px]">
              <Link to="/" className="mr-4">
                <img src={LinkedInIcon} alt="LinkedIn" className="h-26 w-26" />
              </Link>
              <Link to="/" className="mr-4">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="h-26 w-26"
                />
              </Link>
              <Link to="/" className="mr-4">
                <img src={FacebookIcon} alt="Facebook" className="h-26 w-26" />
              </Link>
              <Link to="/" className="mr-4">
                <img src={SlackIcon} alt="Slack" className="h-26 w-26" />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-2 text-base lg:hidden">
              <Link className="hover:text-primary" href="/">
                Privacy Policy
              </Link>
              <div className="text-base">·</div>
              <Link className="hover:text-primary" href="/">
                Cookies notice
              </Link>
            </div>
            <div className="mt-5 text-base text-base sm:text-lg sm:leading-[26px] lg:hidden">
              <p className="mb-3 text-base font-normal sm:mt-8 sm:text-lg sm:leading-[26px]">
                © 2024 Ayan Capital LTD are registered and supervised by the
                Financial Conduct Authority as an Annex 1 financial institution
                for anti-money laundering purposes only. Our Firm Reference
                Number is{" "}
                <Link className="underline hover:text-primary">1004344</Link>.
                Registered in England &amp; Wales, under the number{" "}
                <Link className="underline hover:text-primary">15123809</Link>{" "}
                and registered office address is 20 Wenlock Road, London,
                England, N1 7GU. Registered with the Information Commissioner’s
                Office in compliance with the Data Protection Regulations 2018
                under registration{" "}
                <Link className="underline hover:text-primary">ZB613240</Link>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
