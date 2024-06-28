import { ArrowTopDiagonal } from "../../icons/icons";

const SectionThree = () => {
  return (
    <div className="bg-[#121212] text-[#fff] py-[10vh]">
      <div className="text-[15px] flex items-center justify-center space-x-3">
        <div className="h-0.5 w-6 bg-[#404040]"></div>
        <p>Our Team</p>
      </div>
      <h2 className="lg:text-[48px] text-[36px] font-semibold text-center">
        Meet our team
      </h2>

      <div className="flex lg:flex-row flex-col justify-between w-[90vw] mx-auto lg:pt-14 pt-6">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="lg:w-[45%]"
        >
          <h2 className="lg:text-[30px] text-[16px]">
            Meet the creative minds behind Goat Clouds Technologies, where
            innovation and expertise come together to craft exceptional digital
            experiences.
          </h2>

          <button className="bg-[#3e4784] text-[#fff] flex items-center space-x-2 py-2 px-6 rounded-lg text-[16px] lg:my-6 my-12">
            <p>See all members</p>
            <ArrowTopDiagonal />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:w-[50%]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            className="border border-[#808080] rounded-2xl lg:w-[300px] w-[100%]"
          >
            <img
              src="/assets/team/fr_one.png"
              className="w-[100%] lg:h-[220px] h-[250px]"
              alt="img"
            />
            <div className="space-y-2 my-3 px-4">
              <h2 className="text-[20px] font-semibold">Our team</h2>
              <p>Our team</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="200"
            className="border border-[#808080] rounded-2xl lg:w-[300px] w-[100%]"
          >
            <img
              src="/assets/team/fr_two.png"
              className="w-[100%] lg:h-[220px] h-[250px]"
              alt="img"
            />
            <div className="space-y-2 my-3 px-4">
              <h2 className="text-[20px] font-semibold">Our team</h2>
              <p>Our team</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 w-[90vw] mx-auto lg:gap-10 gap-16 mt-14">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          className="border border-[#808080] rounded-2xl lg:w-[300px] w-[100%]"
        >
          <img
            src="/assets/team/fr_three.png"
            className="w-[100%] lg:h-[220px] h-[250px]"
            alt="img"
          />
          <div className="space-y-2 my-3 px-4">
            <h2 className="text-[20px] font-semibold">Our team</h2>
            <p>Our team</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-offset="200"
          className="border border-[#808080] rounded-2xl lg:w-[300px] w-[100%]"
        >
          <img
            src="/assets/team/fr_four.png"
            className="w-[100%] lg:h-[220px] h-[250px]"
            alt="img"
          />
          <div className="space-y-2 my-3 px-4">
            <h2 className="text-[20px] font-semibold">Our team</h2>
            <p>Our team</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="200"
          className="border border-[#808080] rounded-2xl lg:w-[300px] w-[100%]"
        >
          <img
            src="/assets/team/fr_five.png"
            className="w-[100%] lg:h-[220px] h-[250px]"
            alt="img"
          />
          <div className="space-y-2 my-3 px-4">
            <h2 className="text-[20px] font-semibold">Our team</h2>
            <p>Our team</p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3500"
          data-aos-offset="200"
          className="border border-[#808080] rounded-2xl lg:w-[300px] w-[100%]"
        >
          <img
            src="/assets/team/fr_six.png"
            className="w-[100%] lg:h-[220px] h-[250px]"
            alt="img"
          />
          <div className="space-y-2 my-3 px-4">
            <h2 className="text-[20px] font-semibold">Our team</h2>
            <p>Our team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
