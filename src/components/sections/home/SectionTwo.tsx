import { useEffect } from "react";
import { ArrowTopDiagonal } from "../../icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoScroll from "../../defaults/LogoScroll";
import { NavLink } from "react-router-dom";

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="lg:mt-[10vh] mt-10">
      <LogoScroll />

      <div className="lg:w-[80vw] w-[90vw] mx-auto flex lg:flex-row flex-col lg:my-[10vh] my-10 items-center lg:space-x-10">
        <div
          className=""
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <img src="/assets/img_two.png" alt="img" />
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-[#3e4784] h-1 w-10"></div>
              <p>About Us</p>
            </div>
            <h2 className="lg:text-[48px] text-[32px] font-semibold">
              {" "}
              <span className="text-[#3e4784]">Digital Solutions</span> for
              building your Dream Business
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <p className="text-[15px] lg:text-[16px]">
              Founded on the principles of innovation and excellence, Goat Cloud
              Technologies is a collective of passionate designers, developers,
              and strategists. We bring a diverse set of skills and a wealth of
              experience to the table, ensuring every project we undertake is
              executed with precision and creativity.
            </p>
            <NavLink to="/about">
              <button className="bg-[#3e4784] text-[#fff] flex items-center space-x-2 py-2 px-6 rounded-lg text-[15px] my-6">
                <p>Learn More</p>
                <ArrowTopDiagonal />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
