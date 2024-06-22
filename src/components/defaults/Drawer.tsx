import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  return (
    <>
      <div className="fixed top-0 h-screen z-50 w-screen bg-[#000] bg-opacity-60">
        <div className="justify-end flex">
          <motion.div
            className="flex flex-col space-y-[30px] bg-[#121212] h-screen w-[60%] pt-14 px-6 text-[18px] font-semibold text-[#fff]"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "ease", stiffness: 60 }}
          >
            <NavLink to={"/"}>About Us</NavLink>
            <NavLink to="/account">Our Team</NavLink>
            <span>Services</span>
            <NavLink to="/shops/0">Our Portfolio</NavLink>
            <NavLink to="/contact">Blog</NavLink>
            <div className="flex">
              <button className="bg-[#3e4784] text-[#fff] py-2 px-6 rounded-lg">
                Contact us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Drawer;