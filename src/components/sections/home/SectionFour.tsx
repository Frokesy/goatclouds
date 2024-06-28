const SectionFour = () => {
  return (
    <div className="my-[15vh] w-[90vw] mx-auto">
      <div className="text-[15px] flex items-center space-x-3">
        <div className="h-0.5 w-6 bg-[#404040]"></div>
        <p>Our Services</p>
      </div>
      <h2 className="lg:text-[48px] text-[32px] lg:w-[725px] w-[90%] font-semibold">
        What we do at Goat Clouds Technologies
      </h2>

      <div className="W-[100%] overflow-hidden">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-16 mt-14 scroll-animation mx-auto">
          <div className="space-y-3">
            <img src="/assets/services/img_one.png" alt="img" />
            <h2>Digital Product Design</h2>
          </div>
          <div className="space-y-3">
            <img src="/assets/services/img_two.png" alt="img" />
            <h2>Branding and Design Services</h2>
          </div>
          <div className="space-y-3">
            <img src="/assets/services/img_three.png" alt="img" />
            <h2>Advertising and Marketing</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
