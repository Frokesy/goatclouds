import { ArrowLeftBlack, ArrowRightBlack } from "../../icons/icons";

const Paginator = () => {
  const numbers = [1, 2, 3, "...", 8, 9, 10];
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-offset="200"
      className="w-[90vw] mx-auto flex justify-between items-center my-20"
    >
      <button className="bg-[#fff] text-[#121212] flex items-center space-x-2 lg:px-4 lg:py-2 p-2 rounded-lg">
        <ArrowLeftBlack />
        <p className="lg:block hidden">Previous</p>
      </button>

      <div className="flex lg:space-x-6 space-x-3 items-center">
        {numbers.map((number, i) => (
          <p
            key={i}
            className={`${
              number === 1 &&
              "bg-[#fff] text-[#121212] lg:py-1 lg:px-3 py-0.5 px-2 rounded-lg"
            } lg:text-[16px] text-[14px] cursor-pointer text-[#808080]`}
          >
            {number}
          </p>
        ))}
      </div>

      <button className="bg-[#fff] text-[#121212] flex items-center space-x-2 lg:px-4 lg:py-2 p-2 rounded-lg">
        <ArrowRightBlack />
        <p className="lg:block hidden">Next</p>
      </button>
    </div>
  );
};

export default Paginator;
