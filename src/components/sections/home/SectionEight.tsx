import { useEffect } from "react";
import { ArrowTopDiagonalBlack } from "../../icons/icons";
import AOS from "aos";
import "aos/dist/aos.css";


const SectionEight = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-[90vw] mx-auto py-[15vh]">
      <div className="flex lg:flex-row flex-col items-center lg:space-x-10">
        <img
          src="/assets/blog/Image.png"
          alt="img"
          className="w-full lg:w-auto"
        />
        <div className="lg:mt-0 mt-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-offset="200"
            className="text-[15px] flex items-center space-x-3"
          >
            <div className="h-0.5 w-6 bg-[#8b95d2]"></div>
            <p>Our Blog</p>
          </div>
          <h2
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-offset="200"
            className="lg:text-[48px] text-[36px] font-semibold"
          >
            Latest Writings
          </h2>
          <p data-aos="zoom-in" data-aos-duration="1500" data-aos-offset="200">
            The latest news, technologies, and resources from our team
          </p>

          <button
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-offset="200"
            className="bg-[#3e4784] text-[#fff] py-2 px-4 rounded-lg my-6"
          >
            View more
          </button>
        </div>
      </div>

      <div className="overflow-x-auto mt-20">
        <div className="flex lg:grid lg:grid-cols-4 lg:gap-x-[22vw] gap-x-10 w-max lg:w-full">
          <div className="space-y-4 w-[70vw] lg:w-[384px] flex-shrink-0 mx-2">
            <img src="/assets/blog/Image-1.png" alt="img" className="w-full" />
            <p className="text-[#808080] pt-2 font-semibold">
              Lana Steiner • 18 Jan 2022
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-semibold">
                Building your API Stack
              </h2>
              <ArrowTopDiagonalBlack />
            </div>
            <p className="text-[#404040] text-[15px]">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </p>

            <div className="w-full flex flex-wrap justify-between">
              <p className="text-[#404040]">Software Development</p>
              <p className="text-[#404040]">Tools</p>
            </div>
          </div>

          <div className="space-y-4 w-[70vw] lg:w-[384px] flex-shrink-0 mx-2">
            <img src="/assets/blog/Image-2.png" alt="img" className="w-full" />
            <p className="text-[#808080] pt-2 font-semibold">
              Alec Whitten • 17 Jan 2022
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-semibold">
                Bill Walsh leadership
              </h2>
              <ArrowTopDiagonalBlack />
            </div>
            <p className="text-[#404040] text-[15px]">
              Like to know the secrets of transforming a 2-14 team into a 3x
              Super Bowl winning Dynasty?
            </p>

            <div className="w-full flex flex-wrap justify-between">
              <p className="text-[#404040]">Leadership</p>
              <p className="text-[#404040]">Management</p>
            </div>
          </div>

          <div className="space-y-4 w-[70vw] lg:w-[384px] flex-shrink-0 mx-2">
            <img src="/assets/blog/Image-3.png" alt="img" className="w-full" />
            <p className="text-[#808080] pt-2 font-semibold">
              Demi Wilkinson • 16 Jan 2022
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-semibold">PM mental models</h2>
              <ArrowTopDiagonalBlack />
            </div>
            <p className="text-[#404040] text-[15px]">
              Mental models are simple expressions of complex processes or
              relationships.
            </p>

            <div className="w-full flex flex-wrap justify-between">
              <p className="text-[#404040]">Product</p>
              <p className="text-[#404040]">Research</p>
              <p className="text-[#404040]">Frameworks</p>
            </div>
          </div>

          <div className="space-y-4 w-[70vw] lg:w-[384px] flex-shrink-0 mx-2">
            <img src="/assets/blog/Image-1.png" alt="img" className="w-full" />
            <p className="text-[#808080] pt-2 font-semibold">
              Lana Steiner • 18 Jan 2022
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-semibold">
                Building your API Stack
              </h2>
              <ArrowTopDiagonalBlack />
            </div>
            <p className="text-[#404040] text-[15px]">
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </p>

            <div className="w-full flex flex-wrap justify-between">
              <p className="text-[#404040]">Software Development</p>
              <p className="text-[#404040]">Tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
