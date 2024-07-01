const SectionFour = () => {
  return (
    <div className="my-[15vh] w-[90vw] mx-auto">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="text-[15px] flex items-center space-x-3"
      >
        <div className="h-0.5 w-6 bg-[#404040]"></div>
        <p data-aos="zoom-in" data-aos-duration="1300" data-aos-offset="200">
          Our Services
        </p>
      </div>
      <h2
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-offset="200"
        className="lg:text-[48px] text-[32px] lg:w-[725px] w-[90%] font-semibold"
      >
        What we do at Goat Clouds Technologies
      </h2>

      <div className="W-[100%] overflow-hidden">
      <div className="flex items-center scroll-animation-2">
          <div className="flex items-center space-x-10 lg:space-x-20 mt-14">
            <div className="space-y-3 lg:w-auto w-[90vw]">
              <img src="/assets/services/img_one.png" alt="img" />
              <h2>Digital Product Design</h2>
            </div>
            <div className="space-y-3 lg:w-auto w-[90vw]">
              <img src="/assets/services/img_two.png" alt="img" />
              <h2>Branding and Design Services</h2>
            </div>
            <div className="space-y-3 lg:w-auto w-[90vw]">
              <img src="/assets/services/img_three.png" alt="img" />
              <h2>Advertising and Marketing</h2>
            </div>
            <div className="space-y-3 lg:w-auto w-[90vw]">
              <img src="/assets/services/img_one.png" alt="img" />
              <h2>Digital Product Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
