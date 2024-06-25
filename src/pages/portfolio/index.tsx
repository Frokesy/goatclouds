import Container from "../../components/defaults/Container";
import BottomSection from "../../components/sections/services/BottomSection";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      img: "/assets/portfolio/po_one.png",
      name: "GT-Tech Exchange",
      type: "Fintech App",
    },
    {
      id: 2,
      img: "/assets/portfolio/po_two.png",
      name: "neWeb",
      type: "Web3 website",
    },
    {
      id: 3,
      img: "/assets/portfolio/po_three.png",
      name: "Lytical website",
      type: "Analytics website",
    },
    {
      id: 4,
      img: "/assets/portfolio/po_four.png",
      name: "EH academy website",
      type: "Academics website",
    },
    {
      id: 5,
      img: "/assets/portfolio/po_five.png",
      name: "Foodie",
      type: "Food delivery app",
    },
    {
      id: 6,
      img: "/assets/portfolio/po_six.png",
      name: "uDesign",
      type: "Design Website",
    },
    {
      id: 7,
      img: "/assets/portfolio/po_seven.png",
      name: "Inspire",
      type: "Clothing brand",
    },
    {
      id: 8,
      img: "/assets/portfolio/po_eight.png",
      name: "Antique store",
      type: "Academics website",
    },
    {
      id: 9,
      img: "/assets/portfolio/po_nine.png",
      name: "Home Decor",
      type: "Interior design company website",
    },
    {
      id: 10,
      img: "/assets/portfolio/po_ten.png",
      name: "Architech",
      type: "Portfolio website",
    },
    {
      id: 11,
      img: "/assets/portfolio/po_eleven.png",
      name: "Lyrical website",
      type: "Streaming website",
    },
    {
      id: 12,
      img: "/assets/portfolio/po_twelve.png",
      name: "Exter design",
      type: "Building design website",
    },
  ];
  return (
    <Container active="portfolio">
      <div className="bg-[#121212] text-[#fff] pt-[15vh]">
        <div className="text-[15px] flex items-center justify-center space-x-3">
          <div className="h-1 w-6 bg-[#3e4784]"></div>
          <p>Our Portfolio</p>
        </div>
        <h2 className="lg:text-[48px] text-[32px] font-semibold text-center">
          Showcasing Our Excellence
        </h2>

        <div className="w-[90vw] mx-auto grid grid-cols-2 gap-10 mt-20">
          {items.map((item) => (
            <div key={item.id} className="space-y-2">
              <img src={item.img} alt="po_img" />
              <h2 className="lg:text-[20px] font-semibold">{item.name}</h2>
              <p className="text-[13px]">{item.type}</p>
            </div>
          ))}
        </div>
        <BottomSection />
        <div className="bg-[#fff] pt-4 pb-10">
          <h2 className="text-center text-[#121212] my-6">
            Trusted by companies
          </h2>
          <div className="w-[90vw] mx-auto overflow-x-auto grid lg:grid-cols-6 grid-cols-2 gap-y-10">
            <img src="/assets/logos/canva.png" alt="canva" />
            <img src="/assets/logos/notion.png" alt="notion" />
            <img src="/assets/logos/slack.png" alt="slack" />
            <img src="/assets/logos/dropbox.png" alt="dropbox" />
            <img src="/assets/logos/github.png" alt="github" />
            <img src="/assets/logos/youtube.png" alt="youtube" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
