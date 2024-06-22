import { ArrowTopDiagonalBlack } from "../../icons/icons";

const SectionEight = () => {
  return (
    <div className="w-[90vw] mx-auto py-[15vh]">
      <div className="flex items-center space-x-10">
        <img src="/assets/blog/Image.png" alt="img" />
        <div className="">
          <div className="text-[15px] flex items-center space-x-3">
            <div className="h-0.5 w-6 bg-[#3e4784]"></div>
            <p>Our Blog</p>
          </div>
          <h2 className="text-[48px] font-semibold">Latest Writings</h2>
          <p>The latest news, technologies, and resources from our team</p>

          <button className="bg-[#3e4784] text-[#fff] py-2 px-4 rounded-lg my-6">
            View more
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 w-[95%] overflow-x-auto mt-20 gap-x-[15vw]">
        <div className="space-y-4 w-[384px]">
          <img src="/assets/blog/Image-1.png" alt="img" className="w-[100%]" />
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

          <div className="w-[80%] flex justify-between">
            <p className="text-[#404040]">Software Development</p>
            <p className="text-[#404040]">Tools</p>
          </div>
        </div>

        <div className="space-y-4 w-[384px]">
          <img src="/assets/blog/Image-2.png" alt="img" className="w-[100%]" />
          <p className="text-[#808080] pt-2 font-semibold">
            Alec Whitten • 17 Jan 2022
          </p>
          <div className="flex justify-between items-center">
            <h2 className="text-[24px] font-semibold">Bill Walsh leadership</h2>
            <ArrowTopDiagonalBlack />
          </div>
          <p className="text-[#404040] text-[15px]">
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </p>

          <div className="w-[80%] flex justify-between">
            <p className="text-[#404040]">Leadership</p>
            <p className="text-[#404040]">Management</p>
          </div>
        </div>

        <div className="space-y-4 w-[384px]">
          <img src="/assets/blog/Image-3.png" alt="img" className="w-[100%]" />
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

          <div className="w-[80%] flex justify-between">
            <p className="text-[#404040]">Product</p>
            <p className="text-[#404040]">Research</p>
            <p className="text-[#404040]">Frameworks</p>
          </div>
        </div>

        <div className="space-y-4 w-[384px]">
          <img src="/assets/blog/Image-1.png" alt="img" className="w-[100%]" />
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

          <div className="w-[80%] flex justify-between">
            <p className="text-[#404040]">Software Development</p>
            <p className="text-[#404040]">Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
