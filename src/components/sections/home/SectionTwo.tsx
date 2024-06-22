import { ArrowTopDiagonal } from "../../icons/icons";

const SectionTwo = () => {
  return (
    <div className="mt-[50vh]">
      <h2 className="text-center">Trusted by companies</h2>
      <div className="flex items-center w-[90vw] mx-auto my-10 justify-between">
        <img src="/assets/logos/canva.png" alt="canva" />
        <img src="/assets/logos/notion.png" alt="notion" />
        <img src="/assets/logos/slack.png" alt="slack" />
        <img src="/assets/logos/dropbox.png" alt="dropbox" />
        <img src="/assets/logos/github.png" alt="github" />
        <img src="/assets/logos/youtube.png" alt="youtube" />
      </div>

      <div className="w-[80vw] mx-auto flex my-[15vh] items-center space-x-10">
        <img src="/assets/img_two.png" alt="img" />
        <div className="w-[50%]">
          <div className="flex items-center space-x-4">
            <div className="bg-[#3e4784] h-1 w-10"></div>
            <p>About Us</p>
          </div>
          <h2 className="text-[48px] font-semibold">
            {" "}
            <span className="text-[#3e4784]">Digital Solutions</span> for
            building your Dream Business
          </h2>
          <p>
            Founded on the principles of innovation and excellence, Goat Cloud
            Technologies is a collective of passionate designers, developers,
            and strategists. We bring a diverse set of skills and a wealth of
            experience to the table, ensuring every project we undertake is
            executed with precision and creativity.
          </p>
          <button className="bg-[#3e4784] text-[#fff] flex items-center space-x-2 py-2 px-6 rounded-lg text-[15px] my-6">
            <p>Learn More</p>
            <ArrowTopDiagonal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
