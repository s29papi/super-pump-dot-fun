import React, { useState, useEffect } from "react";
import Logo from "../assets/omni-logo.png";
import { OutlinedButton, PrimaryButton } from "./Button";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { useAccount, useBalance } from "wagmi";
import { useAppKit } from "@reown/appkit/react";
import { FaUser } from "react-icons/fa";
import ProfileModal from "./ProfileModal";

const Header = () => {
  const navigate = useNavigate();
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();
  const { data: balanceData, isLoading } = useBalance({
    address,
  });

  const [showWalletInfo, setShowWalletInfo] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // To Consider: while the wallet connect button was sleek it doesnt persist state, and this led to the following
  // browser connecting while page still shows connect wallet upon refreshing page,
  // wallet declining to connect as the wallet state still says it is connected, we should go for the wallets state directly and check if there is any wallet currently connected
  // if there is we build a little user profile of this state as shown below.
  // the timer helps get the values upon the page loaded, i think 1 sec is good enough.
  // Like pump fun make it possible that when the little user profile is clicked a modal pops up, I did impl the disconect wallet there

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWalletInfo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleConnectWallet = () => {
    if (!isConnected) {
      open();
    }
  };

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

      <div
        className={"flex text-white cursor-pointer"}
        onClick={handleConnectWallet}
      >
        {showWalletInfo ? (
          isConnected && !isLoading && balanceData ? (
            <OutlinedButton
              title={`${address.substring(
                36,
                42
              )} 🐸 ${balanceData.formatted.substring(0, 4)} ETH `}
              width={"100%"}
              icon={<FaUser size={20} className={`text-primary`} />}
              onClick={() => setShowProfileModal(true)}
            />
          ) : (
            <PrimaryButton title={"Connect Wallet"} width={"100%"} />
          )
        ) : (
          "Loading..."
        )}
      </div>

      {showProfileModal && (
        <ProfileModal onClose={() => setShowProfileModal(false)} />
      )}
    </div>
  );
};

export default Header;
