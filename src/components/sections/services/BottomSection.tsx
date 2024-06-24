import { Email, Location, Phone } from "../../icons/serviceIcons";

const BottomSection = () => {
  return (
    <div className="w-[90vw] mx-auto mt-[10vh]">
      <div className="bg-[url('/assets/services/img_four.png')] bg-no-repeat bg-cover relative min-h-[70vh] text-[#fff] rounded-t-2xl">
        <div className="bg-[#000] z-10 absolute w-[100%] h-[100%] bg-opacity-60 py-[10vh] px-10 rounded-t-2xl">
          <div className="text-[15px] flex items-center space-x-3">
            <div className="h-1 w-6 bg-[#3e4784]"></div>
            <p className="text-[#fff]">Ready to build your next project?</p>
          </div>

          <h2 className="text-[40px] font-semibold my-10">
            Get in touch with us
          </h2>

          <div className="grid grid-cols-3 gap-20">
            <div className="bg-[#ccc] bg-opacity-50 rounded-xl backdrop-blur-xl p-6 space-y-4">
              <Email />
              <h2 className="text-[18px] font-semibold">Message Us</h2>
              <p className="pb-3">Speak to our friendly team</p>
              <a href="mailto:goatcloudstech@gmail.com">
                goatcloudstech@gmail.com
              </a>
            </div>

            <div className="bg-[#ccc] bg-opacity-50 rounded-xl backdrop-blur-xl p-6 space-y-4">
              <Location />
              <h2 className="text-[18px] font-semibold">Visit Us</h2>
              <p>Visit our office HQ</p>
              <p>100 Smith Street Collingwood VIC 3066 AU</p>
            </div>

            <div className="bg-[#ccc] bg-opacity-50 rounded-xl backdrop-blur-xl p-6 space-y-4">
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
