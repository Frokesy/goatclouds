import Container from "../../components/defaults/Container";
import {
  ServiceIconFive,
  ServiceIconFour,
  ServiceIconOne,
  ServiceIconSix,
  ServiceIconThree,
  ServiceIconTwo,
} from "../../components/icons/serviceIcons";
import BottomSection from "../../components/sections/services/BottomSection";
import ServiceItems from "../../components/sections/services/ServiceItems";

const Services = () => {
  return (
    <Container active="services">
      <div className="bg-[#121212] pt-[15vh] text-[#fff]">
        <div className="w-[90vw] mx-auto flex justify-between items-center">
          <div className="w-[45%]">
            <div className="text-[15px] flex items-center space-x-3">
              <div className="h-1 w-6 bg-[#3e4784]"></div>
              <p>Services</p>
            </div>
            <h2 className="lg:text-[48px] text-[36px] font-semibold">
              We Offer Solutions
            </h2>
            <h2 className="pt-3">
              At Goat Cloud Technologies, we offer a comprehensive range of
              services to help your business thrive in the digital world. Our
              expertise spans across various domains, ensuring that all your
              digital needs are met with creativity, precision, and a focus on
              results.
            </h2>

            <div className="space-y-3 pt-6 text-[13px] font-light">
              <div className="flex items-center space-x-3">
                <ServiceIconOne />
                <p>Branding and Design Services</p>
              </div>
              <div className="flex items-center space-x-3">
                <ServiceIconTwo />
                <p>Web development and Consulting</p>
              </div>
              <div className="flex items-center space-x-3">
                <ServiceIconThree />
                <p>Digital Product Design</p>
              </div>
              <div className="flex items-center space-x-3">
                <ServiceIconFour />
                <p>Advertising and Marketing</p>
              </div>
              <div className="flex items-center space-x-3">
                <ServiceIconFive />
                <p>UI/UX Design</p>
              </div>
              <div className="flex items-center space-x-3">
                <ServiceIconSix />
                <p>Mobile App Development</p>
              </div>
            </div>
          </div>

          <div className="w-[50%]">
            <img src="/assets/services/img_five.png" alt="img" />
          </div>
        </div>

        <div className="w-[90vw] mx-auto">
          <ServiceItems />
        </div>
        <BottomSection />

        <div className="bg-[#fff] pt-4 pb-10">
          <h2 className="text-center text-[#121212] my-6">Trusted by companies</h2>
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

export default Services;