import React from "react";
import Header from "../components/Header";
import { BackButton, PrimaryButton } from "../components/Button";
import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";

const CreateCoin = () => {
  return (
    <div className={`bg-primary_dark font-poppins`}>
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
            <div>
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
