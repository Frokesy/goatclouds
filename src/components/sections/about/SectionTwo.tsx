import {
  ArrowedUser,
  BrokenHeart,
  Bulb,
  CircledCheck,
  Diagonals,
  Experience,
} from "../../icons/icons";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const items = [
    {
      id: 1,
      header: "Expertise and Experience",
      body: "With a team of seasoned professionals, Goat Cloud Technologies brings a wealth of experience and expertise to every project. Our designers, developers, and strategists are industry experts dedicated to delivering top-tier digital solutions",
      icon: <Experience />,
    },
    {
      id: 2,
      header: "Innovative Design",
      body: "We pride ourselves on pushing the boundaries of design and technology. Our innovative approach ensures that your project will be not only visually stunning but also cutting-edge and ahead of the curve.",
      icon: <Bulb />,
    },
    {
      id: 3,
      header: "User-Centric Approach",
      body: "At the heart of our process is a commitment to the user. We create intuitive, engaging, and seamless user experiences that keep your audience coming back.",
      icon: <ArrowedUser />,
    },
    {
      id: 4,
      header: "Collaborative Process",
      body: "We believe in the power of collaboration. By working closely with our clients, we ensure that their vision is realized and their goals are achieved. Your input is valued at every stage of the project.",
      icon: <Diagonals />,
    },
    {
      id: 5,
      header: "Comprehensive Services",
      body: "From web design and development to branding and digital marketing, we offer a full suite of services to cover all your digital needs. This holistic approach ensures a cohesive and consistent digital presence.",
      icon: <BrokenHeart />,
    },
    {
      id: 6,
      header: "Proven Results",
      body: "Our track record speaks for itself. We have successfully completed numerous projects for a diverse range of clients, consistently delivering results that drive growth and enhance brand visibility.",
      icon: <CircledCheck />,
    },
  ];
  return (
    <div className="w-[90vw] mx-auto lg:my-[15vh] my-10">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="text-[15px] flex items-center justify-center space-x-3"
      >
        <div className="h-1 w-6 bg-[#3e4784]"></div>
        <p>Why choose us</p>
      </div>
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="lg:text-[48px] text-[32px] font-semibold text-center"
      >
        What we <span className="text-[#3e4784]">Offer</span> that <br />{" "}
        <span className="text-[#3e4784]">Stands</span> out
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="text-center text-[#121212] my-4 text-[16px] lg:block hidden"
      >
        Choose Goat Cloud Technologies for your project and experience the
        perfect blend of creativity, innovation, and <br /> professionalism.
        Let's elevate your digital presence together.
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="text-center text-[#121212] my-4 text-[14px] block lg:hidden"
      >
        Choose Goat Cloud Technologies for your project and experience the
        perfect blend of creativity, innovation, and professionalism. Let's
        elevate your digital presence together.
      </p>

      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-14">
        {items.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            key={item.id}
            className="flex flex-col items-center space-y-3"
          >
            <div>{item.icon}</div>
            <h2 className="tetx-[20px] font-semibold">{item.header}</h2>
            <p className="text-[#404040] text-center">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
