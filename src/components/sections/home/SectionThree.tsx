import { ArrowTopDiagonal } from "../../icons/icons";

const SectionThree = () => {
  return (
    <div className="bg-[#121212] text-[#fff] py-[10vh]">
      <div className="text-[15px] flex items-center justify-center space-x-3">
        <div className="h-0.5 w-6 bg-[#404040]"></div>
        <p>Our Team</p>
      </div>
      <h2 className="text-[48px] font-semibold text-center">Meet our team</h2>

      <div className="flex justify-between w-[90vw] mx-auto pt-14">
        <div className="w-[45%]">
          <h2 className="text-[30px]">
            Meet the creative minds behind Goat Clouds Technologies, where
            innovation and expertise come together to craft exceptional digital
            experiences.
          </h2>

          <button className="bg-[#3e4784] text-[#fff] flex items-center space-x-2 py-2 px-6 rounded-lg text-[16px] my-6">
            <p>See all members</p>
            <ArrowTopDiagonal />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-16 w-[50%]">
          <div className="border border-[#808080] rounded-2xl w-[300px]">
            <img
              src="/assets/team/fr_one.png"
              className="w-[100%] h-[220px]"
              alt="img"
            />
            <div className="space-y-2 my-3 px-4">
              <h2 className="text-[20px] font-semibold">Our team</h2>
              <p>Our team</p>
            </div>
          </div>
          <div className="border border-[#808080] rounded-2xl w-[300px]">
            <img
              src="/assets/team/fr_two.png"
              className="w-[100%] h-[220px]"
              alt="img"
            />
            <div className="space-y-2 my-3 px-4">
              <h2 className="text-[20px] font-semibold">Our team</h2>
              <p>Our team</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 w-[90vw] mx-auto gap-x-10 mt-14">
        <div className="border border-[#808080] rounded-2xl w-[300px]">
          <img
            src="/assets/team/fr_three.png"
            className="w-[100%] h-[220px]"
            alt="img"
          />
          <div className="space-y-2 my-3 px-4">
            <h2 className="text-[20px] font-semibold">Our team</h2>
            <p>Our team</p>
          </div>
        </div>
        <div className="border border-[#808080] rounded-2xl w-[300px]">
          <img
            src="/assets/team/fr_four.png"
            className="w-[100%] h-[220px]"
            alt="img"
          />
          <div className="space-y-2 my-3 px-4">
            <h2 className="text-[20px] font-semibold">Our team</h2>
            <p>Our team</p>
          </div>
        </div>
        <div className="border border-[#808080] rounded-2xl w-[300px]">
          <img
            src="/assets/team/fr_five.png"
            className="w-[100%] h-[220px]"
            alt="img"
          />
          <div className="space-y-2 my-3 px-4">
            <h2 className="text-[20px] font-semibold">Our team</h2>
            <p>Our team</p>
          </div>
        </div>
        <div className="border border-[#808080] rounded-2xl w-[300px]">
          <img
            src="/assets/team/fr_six.png"
            className="w-[100%] h-[220px]"
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
