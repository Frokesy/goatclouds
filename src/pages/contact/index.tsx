import { useState } from "react";
import Container from "../../components/defaults/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/defaults/Loader";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    const emailContent = {
      to: "akindeleayanfeoluwa@gmail.com",
      subject: `${data.firstName + " " + data.lastName} has a message for you`,
      body: data.message,
    };
    await fetch("https://api.useplunk.com/v1/send", {
      method: "POST",
      body: JSON.stringify(emailContent),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer sk_9f10cdad42fe120855d5bf1bf98e13556cab724dee5aef05",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          setLoading(false);
          toast.success("Message sent!", {
            position: "top-center",
            theme: "light",
            autoClose: 2000,
            hideProgressBar: true,
            draggable: true,
          });
          setData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <Container active="contact">
      <ToastContainer />
      <div className="flex justify-between lg:flex-row flex-col">
        <div className="flex flex-col lg:space-y-10 space-y-6 lg:pl-[5vw] lg:w-[45%] w-[90vw] mx-auto lg:pt-[10vh] pt-10">
          <h2 className="lg:text-[48px] text-[36px] font-semibold">
            Contact Us
          </h2>
          <p>Have any Project? Say Hello!</p>
          <div className="w-[100%]">
            <div className="flex justify-between space-x-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                  className="bg-inherit border border-[#ccc] w-[100%] py-2 px-3 rounded-lg outline-none"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  className="bg-inherit border border-[#ccc] w-[100%] py-2 px-3 rounded-lg outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="bg-inherit border border-[#ccc] py-2 px-3 rounded-lg outline-none"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className="bg-inherit border border-[#ccc] py-2 px-3 rounded-lg outline-none"
                placeholder="Phone Number"
              />
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                className="bg-inherit border border-[#ccc] py-2 px-3 rounded-lg outline-none"
              ></textarea>
            </div>

            <div className="flex items-center space-x-3 my-4 text-[#404040]">
              <input type="checkbox" name="policy" id="policy" />
              <p>
                You agree to our friendly{" "}
                <span className="underline cursor-pointer">privacy policy</span>
              </p>
            </div>

            <button
              onClick={sendEmail}
              className="bg-[#3e4784] text-[#fff] h-[48px] flex items-center justify-center py-3 w-[100%] rounded-lg"
            >
              {loading ? <Loader /> : 'Send message'}
            </button>
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
