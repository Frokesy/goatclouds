const Hero = () => {
  return (
    <div className="bg-[#121212] py-[15vh] text-[#fff]">
      <div className="w-[90vw] mx-auto flex justify-between items-center">
        <div className="w-[45%]">
          <h2 className="text-[48px] font-semibold mb-6">About Us</h2>
          <p className="text-[18px]">
            Founded on the principles of innovation and excellence, Goat Cloud
            Technologies is a collective of passionate designers, developers,
            and strategists. We bring a diverse set of skills and a wealth of
            experience to the table, ensuring every project we undertake is
            executed with precision and creativity.
          </p>
        </div>

        <div className="justify-center flex flex-col space-y-10">
          <div className="lg:text-[15px] lg:mt-0 mt-10 flex items-center space-x-3">
            <div className="h-0.5 w-6 bg-[#3e4784]"></div>
            <p>Our accomplishments</p>
          </div>
          <div className="grid grid-cols-2 gap-x-[10vw] gap-y-[5vh] lg:pr-[10vw] ">
            <div className="flex flex-col items-center space-y-2">
              <h2 className="lg:text-[60px] text-[30px] font-semibold">5</h2>
              <p className="text-center">Years of building projects</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="lg:text-[60px] text-[30px] font-semibold">24 +</h2>
              <p className="text-center">Countries and growing</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="lg:text-[60px] text-[30px] font-semibold">200%</h2>
              <p className="text-center">Team growth in 12 months</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="lg:text-[60px] text-[30px] font-semibold">
                280 +
              </h2>
              <p className="text-center">5-star reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
