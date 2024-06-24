import Container from "../../components/defaults/Container";

const Services = () => {
  return (
    <Container active="services">
      <div className="bg-[#121212] py-[15vh] text-[#fff]">
        <div className="w-[90vw] mx-auto">
          <div className="text-[15px] flex items-center space-x-3">
            <div className="h-1 w-6 bg-[#3e4784]"></div>
            <p>Services</p>
          </div>
          <h2 className="lg:text-[48px] text-[36px] font-semibold">
            We Offer Solutions
          </h2>
          <div className="flex justify-between"></div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
