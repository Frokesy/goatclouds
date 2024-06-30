const ServiceItems = () => {
  const items = [
    {
      id: 1,
      header: "Digital Product Design",
      body: "We specialize in designing innovative digital products that solve real-world problems and provide exceptional user experiences. Our team works closely with you to understand your vision and bring it to life through cutting-edge design and technology.",
      listItems: [
        "Product Research and Strategy",
        "Wireframing and Prototyping",
        "Interactive Design",
        "Usability Testing",
        "Product Launch and Iteration",
      ],
      img: "/assets/services/img_one.png",
    },
    {
      id: 2,
      header: "Branding and Design Services",
      body: "Our branding and design services help you create a strong visual identity that resonates with your audience. We craft every element of your brand to ensure it communicates your values and stands out in the marketplace.",
      listItems: [
        "Brand Strategy and Positioning",
        "Logo Design and Visual Identity",
        "Print and Digital Collateral",
        "Brand Guidelines Development",
        "Rebranding Services",
      ],
      img: "/assets/services/img_two.png",
    },
    {
      id: 3,
      header: "Advertising and Marketing",
      body: "We develop and execute strategic advertising and marketing campaigns that increase your brand's visibility and drive conversions. Our integrated approach ensures your message reaches the right audience through the most effective channels.",
      listItems: [
        "Digital Marketing Strategy",
        "Search Engine Optimisation (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Marketing",
        "Email Marketing Campaigns",
      ],
      img: "/assets/services/img_three.png",
    },
    {
      id: 4,
      header: "Web Development and Consulting",
      body: "Our web development and consulting services deliver robust, scalable, and secure web solutions. From initial consultation to final deployment, we ensure your website is tailored to your business needs and optimized for performance.",
      listItems: [
        "Frontend and Backend Development",
        "Custom Website Development",
        "E-Commerce Solutions",
        "Website Audits and Consulting",
        "Performance Optimization and Security",
      ],
      img: "/assets/services/img_six.png",
    },
    {
      id: 5,
      header: "UI/UX Design",
      body: "Our UI/UX design services focus on creating seamless and engaging user experiences. We use a user-centric approach to design interfaces that are not only visually appealing but also intuitive and easy to navigate.",
      listItems: [
        "User Research and Personas",
        "Information Architecture",
        "Wireframing and Prototyping",
        "Interaction Design",
        "Usability Testing and Analysis",
        "Interface Design",
      ],
      img: "/assets/services/img_seven.png",
    },
    {
      id: 6,
      header: "Mobile App Development",
      body: "We design and develop mobile applications that offer a smooth and engaging user experience. Whether you need an app for iOS, Android, or both, our team has the expertise to deliver high-quality mobile solutions.",
      listItems: [
        "iOS and Android App Development",
        "Cross-Platform App Development",
        "App Prototyping and Testing",
        "App Store Optimization (ASO)",
        "App Maintenance and Support",
      ],
      img: "/assets/services/img_eight.png",
    },
  ];
  return (
    <div className="mt-20">
      {items.map((item) => (
        <div
          className={`flex justify-between items-center mt-[15vh] ${
            item.id % 2 === 0
              ? "lg:flex-row-reverse flex-col"
              : "lg:flex-row flex-col"
          }`}
          key={item.id}
        >
          <div
            className="lg:w-[30%]"
            data-aos={item.id % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-duration="1500"
            data-aos-offset="200"
          >
            <img src={item.img} alt="img" className="w-[100%] h-[304px]" />
          </div>

          <div className="lg:w-[45%] space-y-6">
            <h2
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="lg:text-[40px] text-[30px] lg:mt-0 mt-4 font-semibold"
            >
              {item.header}
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              <p>{item.body}</p>

              <div className="space-y-3 text-[15px]">
                {item.listItems.map((listItem) => (
                  <p key={listItem}>{listItem}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceItems;
