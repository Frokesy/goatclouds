import { NavLink } from "react-router-dom";
import { Facebook, GitHub, Instagram, Twitter, UserIcon } from "../icons/icons";

const Footer = () => {
  return (
    <div className="bg-[#000] text-[#fff] lg:py-[15vh] py-10">
      <div className="w-[90vw] mx-auto">
        <div className="flex lg:flex-row flex-col justify-between">
          <h2 className="text-[24px] lg:w-[320px] font-semibold">
            Join our newsletter to keep up to date with us!
          </h2>
          <div className="flex lg:flex-row flex-col lg:items-center lg:space-x-3 lg:mr-20 lg:mt-0 mt-10">
            <div className="border border-[#808080] flex items-center lg:rounded-full rounded-xl lg:w-[360px] w-[100%] py-3 px-6 space-x-6">
              <UserIcon />
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-inherit outline-none border-none"
              />
            </div>
            <div className="flex justify-end lg:mt-0 mt-6">
              <button className="bg-[#3e4784] py-3 px-6 lg:rounded-full rounded-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-[#808080] my-14"></div>

        <div className="flex lg:flex-row flex-col justify-between">
          <div>
            <div className="flex items-center lg:space-x-3 space-x-2">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="lg:w-[48px] lg:h-[48px] w-[36px] h-[36px]"
              />
              <h2 className="lg:text-[20px] text-[15px] font-semibold">
                GOATCLOUDS technologies
              </h2>
            </div>
            <p className="w-[320px] mt-4">
              Developing intuitive and engaging digital experiences that
              prioritize user satisfaction and accessibility.
            </p>

            <div className="flex items-center space-x-4 mt-6">
              <Instagram />
              <Facebook />
              <Twitter />
              <GitHub />
            </div>

            <p className="mt-[15vh] lg:block hidden">
              © 2024 goat CLOUDS tech. All rights reserved.
            </p>
          </div>

          <div className="">
            <div className="flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 space-y-10 lg:mt-0 mt-10 lg:mr-20">
              <div className="space-y-4">
                <h2 className="lg:text-[20px] text-[18px] font-semibold">Let&apos;s talk</h2>
                <p className="lg:text-[15px] text-[14px] pb-4">+234 812 345 6789</p>
                <a
                  href="mailto:goatcloudstech@gmail.com"
                  className="lg:text-[15px] text-[14px] underline"
                >
                  goatcloudstech@gmail.com
                </a>
                <p className="w-[80%] text-[#808080] lg:text-[15px] text-[14px]">
                  55 Main Street, 2nd block Melbourne, Australia
                </p>
              </div>
              <div className="space-y-4 flex flex-col">
                <h2 className="lg:text-[20px] text-[18px] font-semibold">Quick links</h2>
                <NavLink to="/about" className="lg:text-[15px] text-[14px]">
                  About Us
                </NavLink>
                <NavLink to="/services" className="lg:text-[15px] text-[14px]">
                  Our Services
                </NavLink>
                <NavLink to="/blog" className="lg:text-[15px] text-[14px]">
                  News & Blog
                </NavLink>
                <NavLink to="/contact" className="lg:text-[15px] text-[14px]">
                  Contact Us
                </NavLink>
              </div>
            </div>
            <div className="lg:mt-[15vh] mt-6 space-x-10 lg:ml-10 flex lg:text-[15px] text-[14px]">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookies</p>
            </div>
            <p className="lg:mt-[15vh] mt-10 block lg:hidden lg:text-[15px] text-[14px]">
              © 2024 goat CLOUDS tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
