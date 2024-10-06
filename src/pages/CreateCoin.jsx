import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { BackButton, PrimaryButton } from "../components/Button";
import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";
import { GlobalContext } from "../conjext";
import CircularLoader from "../components/CircularLoader";
import { FaArrowDown } from "react-icons/fa";

const CreateCoin = () => {
  const { signinLoading, registerLoading } = useContext(GlobalContext);
  const [moreOptions, setMoreOptions] = useState(false);

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
              />
            </div>
            <div>
              <p className={`text-primary text-[18px]`}>Token ticker</p>
              <input
                type="text"
                className={`outline-none w-full lg:w-full 
                    p-[10px] text-white rounded-[4px] mt-[4px] bg-[#333] border border-primary`}
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
                    className={`outline-none w-full lg:w-full 
                    p-[10px] text-white rounded-[4px] mt-[4px] bg-[#333] border border-primary`}
                  />
                </div>
              </div>
            )}

            <div className={`mt-[40px]`}>
              <PrimaryButton title={"Create Coin"} width={"100%"} />
              <p className={`text-[14px] mt-[20px]`}>
                When your coin completes its bonding curve you receive 0.5 SOL
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
