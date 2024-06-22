const SectionFour = () => {
  return (
    <div className="my-[15vh] w-[90vw] mx-auto">
      <div className="text-[15px] flex items-center space-x-3">
        <div className="h-0.5 w-6 bg-[#404040]"></div>
        <p>Our Services</p>
      </div>
      <h2 className="text-[48px] w-[725px] font-semibold">
        What we do at Goat Clouds Technologies
      </h2>

      <div className="grid grid-cols-3 mt-14">
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
  );
};

export default SectionFour;
