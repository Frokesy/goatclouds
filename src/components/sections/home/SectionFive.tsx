const SectionFive = () => {
  return (
    <div className="bg-[#121212] py-[15vh] text-[#fff]">
      <div className="w-[90vw] mx-auto flex justify-between items-center">
        <img src="/assets/services/img_four.png" alt="img" />
        <div className="w-[50%]">
          <div className="text-[15px] flex items-center space-x-3">
            <div className="h-0.5 w-6 bg-[#404040]"></div>
            <p>Build Better, launch faster</p>
          </div>
          <h2 className="text-[48px] font-semibold mt-3 mb-10">Building great things</h2>
          <div className="grid grid-cols-2 gap-20 pr-[15vw]">
            <div className="flex flex-col items-center">
              <h2 className="text-[60px] font-semibold">200%</h2>
              <p>Team growth in 12 months</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[60px] font-semibold">24 +</h2>
              <p>Team growth in 12 months</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[60px] font-semibold">4.8 +</h2>
              <p>Team growth in 12 months</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[60px] font-semibold">280 +</h2>
              <p>Team growth in 12 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
