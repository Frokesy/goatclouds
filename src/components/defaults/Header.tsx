import Hamburger from "hamburger-react";
import { FC, useState } from "react";
import Drawer from "./Drawer";

interface HeaderProps {
  active: string;
}

const Header: FC<HeaderProps> = ({ active }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  console.log(active);
  return (
    <div className="bg-[#121212] text-[#fff]">
      <div className="w-[90vw] mx-auto flex justify-between py-4 items-center">
        <div className="flex items-center lg:space-x-3 space-x-2">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="lg:w-[48px] lg:h-[48px] w-[36px] h-[36px]"
          />
          <h2 className="lg:text-[20px] text-[15px] font-semibold">GOATCLOUDS technologies</h2>
        </div>

        <div className="space-x-10 text-[15px] lg:block hidden">
          <span>About Us</span>
          <span>Our Team</span>
          <span>Services</span>
          <span>Our Portfolio</span>
          <span>Blog</span>
          <button className="bg-[#3e4784] py-2 px-4 rounded-lg">
            Contact us
          </button>
        </div>

        <div className="block lg:hidden z-[100]">
          <Hamburger
            size={20}
            toggled={openDrawer}
            toggle={setOpenDrawer}
            color="#ffffff"
          />
        </div>
      </div>

      {openDrawer && <Drawer />}
    </div>
  );
};

export default Header;