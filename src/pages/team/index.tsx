import Container from "../../components/defaults/Container";

const Team = () => {
  return (
    <Container active="team">
      <div className="bg-[#121212] py-[15vh] text-[#fff]">
        <div className="text-[15px] flex items-center justify-center space-x-3">
          <div className="h-1 w-6 bg-[#3e4784]"></div>
          <p>Our Team</p>
        </div>
        <h2 className="lg:text-[48px] text-[36px] font-semibold text-center">
          Meet our team
        </h2>

        <p className="text-center text-[#121212] my-4">
          Choose Goat Cloud Technologies for your project and experience the
          perfect blend of creativity, innovation, and <br /> professionalism.
          Let&apos;s elevate your digital presence together.
        </p>
      </div>
    </Container>
  );
};

export default Team;
