import { useParams } from "react-router-dom";
import Container from "../../components/defaults/Container";
import { Brand } from "../../components/icons/icons";

const Slug = () => {
  const { portfolio_id } = useParams();

  console.log(portfolio_id);

  const workItems = [
    {
      id: 1,
      title: "Brand Design",
      body: "Worked on the app's visual identity, the design of the logo, color scheme, and overall look and feel that aligns with GT Tech's brand image.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      body: "Crafted the app's visual interface (UI) for intuitive navigation and a delightful user experience (UX). We created wireframes, mockups, and prototypes to ensure a smooth user journey.",
    },
    {
      id: 3,
      title: "App Development",
      body: "We translated the UI/UX designs into functional code and built the app's features, integrate various services and ensure the app runs flawlessly on different platforms.",
    },
  ];

  const featureList = [
    {
      id: 1,
      header: "User-Friendly Features",
      features: [
        "Intuitive Interface",
        "Simple Registration",
        "Biometric Authentication",
        "Detailed Transaction History",
      ],
    },
    {
      id: 2,
      header: "Seamless Transactions",
      features: ["Internet Transfers", "Secure Payment Processing"],
    },
    {
      id: 3,
      header: "Gift Card Integration",
      features: [
        "Wide Variety",
        "Discounted Offers",
        "Fair Rates",
        "P2P Method",
      ],
    },
    {
      id: 4,
      header: "Cryptocurrency Deposits",
      features: [
        "Supported Wallets",
        "Real Time Conversion Rates",
        "Security Measures",
      ],
    },
    {
      id: 5,
      header: "Gadget Marketplace",
      features: [
        "Curated Selection",
        "Search and Filter",
        "Detailed Product Pages",
        "Secure Checkout",
      ],
    },
    {
      id: 6,
      header: "Other Features",
      features: ["Customer Support", "Promotional Offers"],
    },
  ];

  return (
    <Container active="portfolio">
      <div className="bg-[#121212] text-[#fff] pt-[10vh]">
        <div className="w-[90vw] mx-auto">
          <h2 className="text-[48px] font-semibold py-6">GT-Tech Exchange</h2>
          <img
            src="/assets/portfolio/po_three.png"
            alt="po_img"
            className="w-[100%] h-[588px]"
          />

          <h2 className="text-[48px] font-semibold mt-10 pb-4">
            Product Information
          </h2>
          <div className="flex justify-between">
            <div className="w-[65%] space-y-3">
              <h2 className="text-[24px] font-semibold">About</h2>
              <p className="text-[16px]">
                GT Tech Exchange is a user-friendly fintech app designed to
                streamline your financial activities and gadget purchases within
                the GT Tech community.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <h3 className="font-semibold">Project Brand: </h3>
                <p>GT-Tech Exchange</p>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold">Client: </h3>
                <p>GT-Tech Exchange</p>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold">Year: </h3>
                <p>2024</p>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold">Industry: </h3>
                <p>FinTech</p>
              </div>
              <div className="flex items-center">
                <h3 className="font-semibold">Location: </h3>
                <p>Nigeria</p>
              </div>
            </div>
          </div>

          <h2 className="text-[48px] font-semibold py-6">Work Delivered</h2>
          <div className="grid grid-cols-3 gap-20">
            {workItems.map((workItem) => (
              <div
                key={workItem.id}
                className="bg-[#ccc] bg-opacity-50 rounded-xl backdrop-blur-xl p-6 space-y-4"
              >
                <Brand />
                <h2 className="text-[18px] font-semibold">{workItem.title}</h2>
                <p className="">{workItem.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[48px] font-semibold py-6 mt-[10vh]">Features</h2>
          <div className="grid grid-cols-3 gap-20">
            {featureList.map((featureItem) => (
              <div
                key={featureItem.id}
                className="bg-[#ccc] bg-opacity-50 rounded-xl backdrop-blur-xl p-6 space-y-4"
              >
                <h2 className="text-[24px] font-semibold">
                  {featureItem.header}:
                </h2>
                <div className="space-y-3">
                  {featureItem.features.map((feature) => (
                    <p key={feature}>{feature}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Slug;
