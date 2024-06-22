const SectionSeven = () => {
  return (
    <div className="bg-[#121212] text-[#fff] py-[15vh]">
      <div className="w-[90vw] mx-auto">
        <div className="text-[15px] flex items-center space-x-3">
          <div className="h-0.5 w-6 bg-[#404040]"></div>
          <p>Our Services</p>
        </div>
        <h2 className="text-[40px] w-[725px] font-semibold">
          Don&apos;t just take our words for it
        </h2>
        <p className="text-[20px]">
          Hear from some of our amazing customers who are building faster.
        </p>

        <div className="grid grid-cols-4 w-[95%] gap-x-[15vw] overflow-x-auto mt-16">
          <div className="w-[384px] relative">
            <img
              src="/assets/testimonials/te_one.png"
              alt="img"
              className="w-[100%] h-[512px]"
            />
            <div className="absolute bg-[#fff] w-[100%] bottom-0 bg-opacity-40 space-y-4 backdrop-blur-sm py-4 px-3">
              <p className="text-[18px]">
                "Goat Cloud Technologies transformed our outdated website into a
                modern, user-friendly platform. We highly recommend them for any
                web development needs."
              </p>
              <h2 className="text-[30px] font-bold">Sarah Lee</h2>
              <p>Marketing Director, GreenWave Enterprises</p>
            </div>
          </div>

          <div className="w-[384px] relative">
            <img
              src="/assets/testimonials/te_two.png"
              alt="img"
              className="w-[100%] h-[512px]"
            />
            <div className="absolute bg-[#fff] w-[100%] bottom-0 bg-opacity-30 space-y-4 backdrop-blur-sm py-4 px-3">
              <p className="text-[18px]">
                “We partnered with Goat Cloud Technologies for our mobile app
                development project, and they delivered beyond our
                expectations.”
              </p>
              <h2 className="text-[30px] font-bold">Michael Brown</h2>
              <p>COO, Command+R</p>
            </div>
          </div>

          <div className="w-[384px] relative">
            <img
              src="/assets/testimonials/te_three.png"
              alt="img"
              className="w-[100%] h-[512px]"
            />
            <div className="absolute bg-[#fff] w-[100%] bottom-0 bg-opacity-30 space-y-4 backdrop-blur-sm py-4 px-3">
              <p className="text-[18px]">
                “The team at Goat Cloud Technologies took our vision and turned
                it into a beautiful and functional e-commerce website."
              </p>
              <h2 className="text-[30px] font-bold">Rachel Turner</h2>
              <p>Designer, Catalog</p>
            </div>
          </div>

          <div className="w-[384px] relative">
            <img
              src="/assets/testimonials/te_three.png"
              alt="img"
              className="w-[100%] h-[512px]"
            />
            <div className="absolute bg-[#fff] w-[100%] bottom-0 bg-opacity-30 space-y-4 backdrop-blur-sm py-4 px-3">
              <p className="text-[18px]">
                “The team at Goat Cloud Technologies took our vision and turned
                it into a beautiful and functional e-commerce website."
              </p>
              <h2 className="text-[30px] font-bold">Rachel Turner</h2>
              <p>Designer, Catalog</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
