import { NavLink } from "react-router-dom";
import Container from "../../components/defaults/Container";
import BottomSection from "../../components/sections/services/BottomSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoScroll from "../../components/defaults/LogoScroll";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      img: "/assets/portfolio/po_one.png",
      name: "GT-Tech Exchange",
      type: "Fintech App",
      duration: 1200,
    },
    {
      id: 2,
      img: "/assets/portfolio/po_two.png",
      name: "neWeb",
      type: "Web3 website",
      duration: 1300,
    },
    {
      id: 3,
      img: "/assets/portfolio/po_three.png",
      name: "Lytical website",
      type: "Analytics website",
      duration: 1400,
    },
    {
      id: 4,
      img: "/assets/portfolio/po_four.png",
      name: "EH academy website",
      type: "Academics website",
      duration: 1500,
    },
    {
      id: 5,
      img: "/assets/portfolio/po_five.png",
      name: "Foodie",
      type: "Food delivery app",
      duration: 1600,
    },
    {
      id: 6,
      img: "/assets/portfolio/po_six.png",
      name: "uDesign",
      type: "Design Website",
      duration: 1700,
    },
    {
      id: 7,
      img: "/assets/portfolio/po_seven.png",
      name: "Inspire",
      type: "Clothing brand",
      duration: 1800,
    },
    {
      id: 8,
      img: "/assets/portfolio/po_eight.png",
      name: "Antique store",
      type: "Academics website",
      duration: 1900,
    },
    {
      id: 9,
      img: "/assets/portfolio/po_nine.png",
      name: "Home Decor",
      type: "Interior design company website",
      duration: 2000,
    },
    {
      id: 10,
      img: "/assets/portfolio/po_ten.png",
      name: "Architech",
      type: "Portfolio website",
      duration: 2100,
    },
    {
      id: 11,
      img: "/assets/portfolio/po_eleven.png",
      name: "Lyrical website",
      type: "Streaming website",
      duration: 2200,
    },
    {
      id: 12,
      img: "/assets/portfolio/po_twelve.png",
      name: "Exter design",
      type: "Building design website",
      duration: 2300,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container active="portfolio">
      <div className="bg-[#121212] text-[#fff] lg:pt-[15vh] pt-10">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="text-[15px] flex items-center justify-center space-x-3"
        >
          <div className="h-1 w-6 bg-[#3e4784]"></div>
          <p>Our Portfolio</p>
        </div>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="lg:text-[48px] text-[34px] font-semibold text-center"
        >
          Showcasing Our Excellence
        </h2>

        <div className="w-[90vw] mx-auto grid grid-cols-2 gap-10 mt-20">
          {items.map((item) => (
            <NavLink
              to={`/portfolio/${item.id}`}
              key={item.id}
              data-aos="fade-up"
              data-aos-duration={item.duration}
              data-aos-offset="200"
              className="space-y-2"
            >
              <img src={item.img} alt="po_img" />
              <h2 className="lg:text-[20px] font-semibold">{item.name}</h2>
              <p className="text-[13px]">{item.type}</p>
            </NavLink>
          ))}
        </div>
        <BottomSection />
        <div className="bg-[#fff] text-[#000] pt-6 pb-6">
            <LogoScroll />
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
