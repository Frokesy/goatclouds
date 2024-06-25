import Container from "../../components/defaults/Container";

const Contact = () => {
  return (
    <Container active="contact">
      <div className="flex justify-between lg:flex-row flex-col">
        <div className="flex flex-col lg:space-y-10 space-y-6 lg:pl-[5vw] lg:w-[45%] w-[90vw] mx-auto lg:pt-[10vh] pt-10">
          <h2 className="lg:text-[48px] text-[36px] font-semibold">Contact Us</h2>
          <p>Have any Project? Say Hello!</p>
          <div className="w-[100%]">
            <div className="flex justify-between space-x-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder="First Name" className="bg-inherit border border-[#ccc] w-[100%] py-2 px-3 rounded-lg outline-none" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder="Last Name" className="bg-inherit border border-[#ccc] w-[100%] py-2 px-3 rounded-lg outline-none" />
              </div>
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <label htmlFor="email">Email</label>
              <input type="text" className="bg-inherit border border-[#ccc] py-2 px-3 rounded-lg outline-none" placeholder="Email" />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" className="bg-inherit border border-[#ccc] py-2 px-3 rounded-lg outline-none" placeholder="Phone Number"  />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="bg-inherit border border-[#ccc] py-2 px-3 rounded-lg outline-none"></textarea>
            </div>

            <div className="flex items-center space-x-3 my-4 text-[#404040]">
                <input type="checkbox" name="policy" id="policy" />
                <p>You agree to our friendly <span className="underline cursor-pointer">privacy policy</span></p>
            </div>

            <button className="bg-[#3e4784] text-[#fff] py-3 w-[100%] rounded-lg">Confirm</button>
          </div>
        </div>
        <div className="lg:w-[50%] mt-10 lg:mt-0">
          <img src="/assets/map.png" alt="map" className="w-[100%]" />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
