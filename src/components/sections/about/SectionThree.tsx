const SectionThree = () => {
  return (
    <div className="lg:w-[90vw] mx-auto">
      <div className="bg-[url('/assets/services.png')] relative lg:h-[50vh] h-[40vh] text-[#fff] lg:rounded-t-2xl">
        <div className="bg-[#000] z-10 absolute w-[100%] h-[100%] bg-opacity-60 lg:py-[10vh] py-10 px-4 lg:px-10 lg:rounded-t-2xl">
          <div className="text-[15px] flex items-center space-x-3">
            <div className="h-1 w-6 bg-[#3e4784]"></div>
            <p className="text-[#fff]">Services</p>
          </div>

          <div className="grid grid-cols-2 lg:text-[40px] text-[13px] font-semibold gap-y-6 mt-6">
            <p>Digital Product Design</p>
            <p>Branding and Design Services</p>
            <p>Advertising and Marketing</p>
            <p>Web Development and Consulting</p>
            <p>UI/UX Experience Design</p>
            <p>Mobile App Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
