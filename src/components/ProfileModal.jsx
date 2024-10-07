import React from "react";
import { FaUser } from "react-icons/fa";
import { useAccount, useDisconnect } from "wagmi";
import { IoIosWallet } from "react-icons/io";
import { MdCastConnected } from "react-icons/md";
import { OutlinedButton } from "./Button";

const ProfileModal = ({ onClose }) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect()

  let formattedAddr = address ? address.substring(36, 42) : "0x... [ connect wallet ]";

 const handleDisconnect = () => { 
    disconnect()
 }

  return (
    <div className={`fixed top-0 left-0 w-full h-full z-10`}>
      <div className={`w-full h-full bg-[#000000cb] text-white relative`}>
        <div
          className={`absolute flex bg-[#fff] text-primary w-[50px] 
            h-[50px] justify-center items-center rounded-full top-5 right-10 cursor-pointer`}
          onClick={onClose}
        >
          <p className={`text-[30px]`}>&times;</p>
        </div>
        <div className={`w-full h-full flex justify-center items-center`}>
          <div
            className={`bg-primary_dark border border-primary 
                p-[20px] rounded-[8px] w-[40%] space-y-[20px]`}
          >
            <div className={`flex items-center space-x-[50px]`}>
              <div className={`flex items-center space-x-[20px]`}>
                <FaUser size={20} className={`text-primary`} />
                <p className={`text-[14px]`}>Username :</p>
              </div>

              <p className={`text-[14px]`}>{`${formattedAddr}`}</p>
            </div>
            <div className={`flex items-center space-x-[50px]`}>
              <div className={`flex items-center space-x-[14px]`}>
                <MdCastConnected size={20} className={`text-primary`} />
                <p className={`text-[14px]`}>Status :</p>
              </div>

              <p className={`text-[14px]`}>
                {isConnected && (
                  <span className={`flex items-center space-x-[10px]`}>
                    {" "}
                    <div
                      className={`h-[15px] w-[15px] rounded-full bg-green-600`}
                    />
                    <p>Connected</p>
                  </span>
                )}
              </p>
            </div>

            <div className={`flex justify-center w-full`}>
              <OutlinedButton title={"Disconnect"} width={"100%"} onClick={handleDisconnect} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
