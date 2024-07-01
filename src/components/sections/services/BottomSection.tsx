import { Email, Location, Phone } from "../../icons/serviceIcons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BottomSection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
    <div className="lg:w-[90vw] mx-auto mt-[10vh]">
      <div className="bg-[url('/assets/services/img_four.png')] bg-no-repeat bg-cover relative lg:min-h-[70vh] min-h-[100vh] text-[#fff] lg:rounded-t-2xl">
        <div className="bg-[#000] z-10 absolute w-[100%] h-[100%] bg-opacity-60 lg:py-[10vh] py-10 lg:px-10 px-4 lg:rounded-t-2xl">
          <div className="text-[15px] flex items-center space-x-3">
            <div className="h-1 w-6 bg-[#3e4784]"></div>
            <p className="text-[#fff]">Ready to build your next project?</p>
          </div>

          <h2 className="lg:text-[40px] text-[30px] font-semibold lg:my-10 my-3">
            Get in touch with us
          </h2>

          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-6">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="200"
              className="bg-[#ccc] bg-opacity-50 rounded-xl backdrop-blur-xl p-6 space-y-4"
            >
              <Email />
              <h2 className="text-[18px] font-semibold">Message Us</h2>
              <p className="pb-3">Speak to our friendly team</p>
              <a href="mailto:goatcloudstech@gmail.com">
                goatcloudstech@gmail.com
              </a>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-offset="200"
              className="bg-[#ccc] bg-opacity-50 rounded-xl backdrop-blur-xl p-6 space-y-4"
            >
              <Location />
              <h2 className="text-[18px] font-semibold">Visit Us</h2>
              <p>Visit our office HQ</p>
              <p>100 Smith Street Collingwood VIC 3066 AU</p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="bg-[#ccc] bg-opacity-50 rounded-xl backdrop-blur-xl p-6 space-y-4"
            >
              <Phone />
              <h2 className="text-[18px] font-semibold">Call Us</h2>
              <p className="pb-3">Mon-Fri from 8am to 5pm</p>
              <p>+2348123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
