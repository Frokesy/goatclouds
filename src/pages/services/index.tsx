import Container from "../../components/defaults/Container";
import {
  ServiceIconFive,
  ServiceIconFour,
  ServiceIconOne,
  ServiceIconSix,
  ServiceIconThree,
  ServiceIconTwo,
} from "../../components/icons/serviceIcons";
import BottomSection from "../../components/sections/services/BottomSection";
import ServiceItems from "../../components/sections/services/ServiceItems";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoScroll from "../../components/defaults/LogoScroll";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container active="services">
      <div className="bg-[#121212] lg:pt-[18vh] pt-10 text-[#fff]">
        <div className="w-[90vw] mx-auto lg:flex-row flex-col flex justify-between items-center">
          <div className="lg:w-[45%]">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              <div className="text-[15px] flex items-center space-x-3">
                <div className="h-1 w-6 bg-[#3e4784]"></div>
                <p>Services</p>
              </div>
              <h2 className="lg:text-[48px] text-[32px] font-semibold">
                We Offer Solutions
              </h2>
              <h2 className="pt-3 text-[15px] lg:text-[16px]">
                At Goat Cloud Technologies, we offer a comprehensive range of
                services to help your business thrive in the digital world. Our
                expertise spans across various domains, ensuring that all your
                digital needs are met with creativity, precision, and a focus on
                results.
              </h2>
            </div>

            <div className="space-y-3 pt-6 text-[13px] font-light">
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-offset="200"
                className="flex items-center space-x-3"
              >
                <ServiceIconOne />
                <p>Branding and Design Services</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1600"
                data-aos-offset="200"
                className="flex items-center space-x-3"
              >
                <ServiceIconTwo />
                <p>Web development and Consulting</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1700"
                data-aos-offset="200"
                className="flex items-center space-x-3"
              >
                <ServiceIconThree />
                <p>Digital Product Design</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-offset="200"
                className="flex items-center space-x-3"
              >
                <ServiceIconFour />
                <p>Advertising and Marketing</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1900"
                data-aos-offset="200"
                className="flex items-center space-x-3"
              >
                <ServiceIconFive />
                <p>UI/UX Design</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="200"
                className="flex items-center space-x-3"
              >
                <ServiceIconSix />
                <p>Mobile App Development</p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-offset="200"
            className="lg:w-[50%] mt-10 lg:mt-0"
          >
            <img src="/assets/services/img_five.png" alt="img" />
          </div>
        </div>

        <div className="w-[90vw] mx-auto pt-10">
          <ServiceItems />
        </div>
        <BottomSection />

        <div className="bg-[#fff] pt-8 pb-10 text-[#000]">
          <LogoScroll />
        </div>
      </div>
    </Container>
  );
};

export default Services;
