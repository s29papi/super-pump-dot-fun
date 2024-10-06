import ERC20Factory from "../../abi/ERC20Factory";
import React, { useContext, useState, useEffect } from "react";
import {
  useAccount,
  useBalance,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import Header from "../components/Header";
import { BackButton, PrimaryButton } from "../components/Button";
import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";
import { GlobalContext } from "../conjext";
import CircularLoader from "../components/CircularLoader";
import { FaArrowDown } from "react-icons/fa";
import { parseUnits } from "viem";
import { watchContractEvent } from "@wagmi/core";

const CreateCoin = () => {
  const { signinLoading, registerLoading } = useContext(GlobalContext);
  const [moreOptions, setMoreOptions] = useState(false);

  const [tokenName, setTokenName] = useState("");
  const [tokenTicker, setTokenTicker] = useState("");

  const { isConnected } = useAccount(); // user must be connected b4 create token, you can make use of isConnected (true || false)

  const { data: hash, writeContract } = useWriteContract();

  // To-Do: Store @ ipfs or directly store in db (easier but centralized),
  // if stored in db can each individual route. this route can then be stored on chain.
  // Params:
  // const [tokenDescription, setTokenDescription] = useState("");
  // const [twitterLink, setTwitterLink] = useState("");
  // const [telegramLink, setTelegramLink] = useState("");
  // const [websiteLink, setWebsiteLink] = useState("");

  const handleCreateCoin = async () => {
    writeContract({
      abi: ERC20Factory,
      address: "0x2d34f09772CB0C0e531d06C15993E51974535EfB",
      functionName: "createERC20Token",
      args: [
        tokenName,
        tokenTicker,
        parseUnits("1.0", 18), // To-Do: Let contract deploy with 0 initial supply
      ],
    });
  };

  const [newTokenAddress, setNewTokenAddress] = useState(null);

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    data,
  } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed && data && data.logs) {
      setNewTokenAddress("0x" + data.logs[1].topics[1].slice(26));
    }
  }, [isConfirmed, data]);

  return (
    <div className={`bg-primary_dark font-poppins`}>
      {/* Loading */}

      {signinLoading && (
        <div className={`fixed top-0 left-0 w-full h-full z-10`}>
          <div
            className={`w-full h-full bg-[#000000bc] flex justify-center items-center`}
          >
            <CircularLoader title={"Restoring your session"} />
          </div>
        </div>
      )}

      {registerLoading && (
        <div className={`fixed top-0 left-0 w-full h-full z-10`}>
          <div
            className={`w-full h-full bg-[#000000bc] flex justify-center items-center`}
          >
            <CircularLoader title={"Creating new session"} />
          </div>
        </div>
      )}

      {/* Header */}
      <Header />

      <div className={`px-[16px] lg:px-[100px] pb-[100px]`}>
        <div className={`mt-[50px]`}>
          <BackButton />
        </div>

        <div className={`text-white flex justify-center mt-[40px]`}>
          <div className={`space-y-[20px]`}>
            <div>
              <p className={`text-primary text-[18px]`}>Token name</p>
              <input
                type="text"
                className={`outline-none w-full lg:w-full 
                    p-[10px] text-white rounded-[4px] mt-[4px] bg-[#333] border border-primary`}
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
              />
            </div>
            <div>
              <p className={`text-primary text-[18px]`}>Token ticker</p>
              <input
                type="text"
                className={`outline-none w-full lg:w-full 
                    p-[10px] text-white rounded-[4px] mt-[4px] bg-[#333] border border-primary`}
                value={tokenTicker}
                onChange={(e) => setTokenTicker(e.target.value)}
              />
            </div>
            <div>
              <p className={`text-primary text-[18px]`}>Token description</p>
              <textarea
                type="text"
                className={`outline-none w-full lg:w-full 
                    p-[10px] text-white rounded-[4px] mt-[4px] bg-[#333] border border-primary`}
              />
            </div>
            <div>
              <p className={`text-primary text-[18px]`}>Token image</p>
              <FileUploader />
            </div>

            <div className={`underline`}>
              <div
                className={`flex items-center cursor-pointer space-x-[20px]`}
                onClick={() => setMoreOptions(!moreOptions)}
              >
                <p>
                  {moreOptions === false
                    ? "Show more options"
                    : "Hide more options"}
                </p>
                <FaArrowDown className={`text-primary`} size={20} />
              </div>
            </div>

            {moreOptions && (
              <div className={`space-y-[20px]`}>
                <div>
                  <p className={`text-primary text-[18px]`}>
                    Twitter Link (Optional)
                  </p>
                  <input
                    type="text"
                    className={`outline-none w-full lg:w-full 
                    p-[10px] text-white rounded-[4px] mt-[4px] bg-[#333] border border-primary`}
                  />
                </div>
                <div>
                  <p className={`text-primary text-[18px]`}>
                    Telegram Link (Optional)
                  </p>
                  <input
                    type="text"
                    className={`outline-none w-full lg:w-full 
                    p-[10px] text-white rounded-[4px] mt-[4px] bg-[#333] border border-primary`}
                  />
                </div>
                <div>
                  <p className={`text-primary text-[18px]`}>
                    Website (Optional)
                  </p>
                  <input
                    type="text"
                    S
                    className={`outline-none w-full lg:w-full 
                    p-[10px] text-white rounded-[4px] mt-[4px] bg-[#333] border border-primary`}
                  />
                </div>
              </div>
            )}

            <div className={`mt-[40px]`}>
              <PrimaryButton
                title={"Create Coin"}
                width={"100%"}
                onClick={handleCreateCoin}
              />
              <p className={`text-[14px] mt-[20px]`}>
                {hash && <div>Transaction Hash: {hash}</div>}
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isConfirmed && <div>Transaction confirmed.</div>}
                {isConfirmed && <div> Contract Address: {newTokenAddress}</div>}
              </p>
              <p className={`text-[14px] mt-[20px]`}>
                {/* When your coin completes its bonding curve you receive 0.5 SOL */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default CreateCoin;
