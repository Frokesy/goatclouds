import { ArrowLeftBlack, ArrowRightBlack } from "../../icons/icons";

const Paginator = () => {
  const numbers = [1, 2, 3, "...", 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="w-[90vw] mx-auto flex justify-between items-center my-20">
      <button className="bg-[#fff] text-[#121212] flex items-center space-x-2 px-4 py-2 rounded-lg">
        <ArrowLeftBlack />
        <p>Previous</p>
      </button>

      <div className="flex space-x-6 items-center">
        {numbers.map((number, i) => (
          <p key={i} className={`${number === 1 && 'bg-[#fff] text-[#121212] py-1 px-3 rounded-lg'} cursor-pointer text-[#808080]`}>
            {number}
          </p>
        ))}
      </div>

      <button className="bg-[#fff] text-[#121212] flex items-center space-x-2 px-4 py-2 rounded-lg">
        <ArrowRightBlack />
        <p>Next</p>
      </button>
    </div>
  );
};

export default Paginator;
