import { Facebook, GitHub, Instagram, Twitter, UserIcon } from "../icons/icons";

const Footer = () => {
  return (
    <div className="bg-[#121212] text-[#fff] py-[15vh]">
      <div className="w-[90vw] mx-auto">
        <div className="flex justify-between">
          <h2 className="text-[24px] w-[320px] font-semibold">
            Join our newsletter to keep up to date with us!
          </h2>
          <div className="flex items-center space-x-3 mr-20">
            <div className="border border-[#808080] flex items-center rounded-full w-[360px] py-3 px-6 space-x-6">
              <UserIcon />
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-inherit outline-none border-none"
              />
            </div>
            <button className="bg-[#3e4784] py-3 px-6 rounded-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-b border-[#808080] my-14"></div>

        <div className="flex justify-between">
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

            <p className="mt-[15vh]">
              © 2024 goat CLOUDS tech. All rights reserved.
            </p>
          </div>

          <div className="">
            <div className="flex space-x-10 mr-20">
              <div className="space-y-4">
                <h2 className="text-[20px] font-semibold">Let&apos;s talk</h2>
                <p className="text-[15px] pb-4">+234 812 345 6789</p>
                <a
                  href="mailto:goatcloudstech@gmail.com"
                  className="text-[15px] underline"
                >
                  goatcloudstech@gmail.com
                </a>
                <p className="w-[80%] text-[#808080] text-[15px]">
                  55 Main Street, 2nd block Melbourne, Australia
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-[20px] font-semibold">Quick links</h2>
                <p className="text-[15px]">About Us</p>
                <p className="text-[15px]">Our Services</p>
                <p className="text-[15px]">News & Blog</p>
                <p className="text-[15px]">Contact Us</p>
              </div>
            </div>
            <div className="mt-[15vh] space-x-10 ml-10 flex">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
