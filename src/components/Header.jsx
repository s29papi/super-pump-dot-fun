import React from "react";
import Logo from "../assets/omni-logo.png";
import { PrimaryButton } from "./Button";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center justify-between p-[16px] lg:px-[100px] lg:py-[32px]`}
    >
      <div className={`flex items-center space-x-[100px]`}>
        <div
          className={`flex items-center cursor-pointer`}
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="" className={`w-[100px]`} />
          <p className={`text-white uppercase text-[30px] font-[800]`}>Omni</p>
        </div>

        <div className={`hidden lg:flex items-center space-x-[20px]`}>
          <FaXTwitter className={`text-white cursor-pointer`} size={30} />
          <LiaTelegramPlane className={`text-white cursor-pointer`} size={30} />
        </div>
      </div>

      <div>
        <PrimaryButton title={"Connect"} />
      </div>
    </div>
  );
};

export default Header;
