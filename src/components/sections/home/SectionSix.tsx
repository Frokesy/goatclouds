import { ArrowTopDiagonal } from "../../icons/icons";

const SectionSix = () => {
  return (
    <div className="my-[15vh] w-[90vw] mx-auto">
      <div className="text-[15px] flex items-center justify-center space-x-3">
        <div className="h-0.5 w-6 bg-[#404040]"></div>
        <p>Our Portfolio</p>
      </div>
      <h2 className="text-[48px] font-semibold text-center">
        Our Recent Works
      </h2>
      <div className="grid grid-cols-2 gap-y-10 mt-20">
        <div className="space-y-1">
          <img src="/assets/portfolio/po_one.png" alt="po_img" />
          <h2 className="text-[20px] font-semibold">GT-Tech Exchange</h2>
          <p className="text-[13px]">Fintech app</p>
        </div>
        <div className="space-y-1">
          <img src="/assets/portfolio/po_two.png" alt="po_img" />
          <h2 className="text-[20px] font-semibold">neWeb</h2>
          <p className="text-[13px]">web3 website</p>
        </div>
        <div className="space-y-1">
          <img src="/assets/portfolio/po_three.png" alt="po_img" />
          <h2 className="text-[20px] font-semibold">Lytical website</h2>
          <p className="text-[13px]">analytics website</p>
        </div>
        <div className="space-y-1">
          <img src="/assets/portfolio/po_four.png" alt="po_img" />
          <h2 className="text-[20px] font-semibold">EH academy website</h2>
          <p className="text-[13px]">Academics website</p>
        </div>
      </div>
      <button className="bg-[#3e4784] text-[#fff] flex items-center space-x-2 py-2 px-6 rounded-lg text-[16px] my-14">
        <p>View more projects</p>
        <ArrowTopDiagonal />
      </button>
    </div>
  );
};

export default SectionSix;
