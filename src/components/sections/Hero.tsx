import { Play } from "../icons/icons";

const Hero = () => {
  return (
    <div className="bg-[#121212] text-[#fff] relative min-h-[95vh] w-[100%]">
      <div className="flex lg:flex-row flex-col justify-between lg:pl-20 pl-6 items-center pt-10">
        <div className="lg:w-[820px] lg:max-w-[820px]">
          <h2 className="lg:text-[62px] text-[32px] font-semibold">
            Crafting Digital Experiences with Precision and Creativity
          </h2>
          <p className="my-6 lg:text-[16px] text-[14px] pr-3">
            Transforming your ideas into visually stunning and highly usable
            online media and pushing design and technology to the limits to
            ensure your brand stands out in the digital landscape.
          </p>

          <div className="text-[14px] flex space-x-6">
            <button className="flex border border-[#5a5b5d] py-2 px-4 rounded-lg space-x-2">
              <span>View reel</span>
              <Play />
            </button>
            <button className="border border-[#5a5b5d] py-2 px-4 rounded-lg">
              Contact us
            </button>
          </div>
        </div>
        <img src="/assets/hero/hero_line_pattern.png" alt="linePattern" className="z-20 lg:relative absolute lg:top-0 top-[20vh]" />
      </div>
    
        <div className="z-40 absolute lg:hidden block bottom-0 w-[90vw] mx-auto left-5">
            <img src="/assets/hero/hero_img.png" alt="hero_img" />
        </div>
      <div className="px-20 lg:flex hidden items-center justify-center absolute -bottom-[45vh] bg-[#121212] w-[100%] pt-10">
        <img src="/assets/hero/hero_img.png" alt="heroImg" className="z-30" />
      </div>
    </div>
  );
};

export default Hero;
