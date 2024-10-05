import React from "react";
import Header from "../components/Header";
import { PrimaryButton } from "../components/Button";
import DefaultCoin from "../components/DefaultCoin";
import TokenBox from "../components/TokenBox";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const tokens = [
  {
    id: 1,
    image: "",
    created_by: "buh23y",
    created_time: "10 mins ago",
    market_cap: "10.2k",
    replies_count: 7,
    token_name: "Zelle",
    token_ticker: "ZELLE",
  },
  {
    id: 2,
    image: "",
    created_by: "buh23y",
    created_time: "10 mins ago",
    market_cap: "10.2k",
    replies_count: 7,
    token_name: "Zelle",
    token_ticker: "ZELLE",
  },
  {
    id: 3,
    image: "",
    created_by: "buh23y",
    created_time: "10 mins ago",
    market_cap: "10.2k",
    replies_count: 7,
    token_name: "Zelle",
    token_ticker: "ZELLE",
  },
  {
    id: 4,
    image: "",
    created_by: "buh23y",
    created_time: "10 mins ago",
    market_cap: "10.2k",
    replies_count: 7,
    token_name: "Zelle",
    token_ticker: "ZELLE",
  },
];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className={`bg-primary_dark font-poppins `}>
      {/* Header */}
      <Header />

      <div className={`mt-[20px] pb-[100px]`}>
        {/* Start Coin Button */}
        <div className={`flex justify-center`}>
          <PrimaryButton
            title={"Create A Coin"}
            width={"200px"}
            onClick={() => navigate("/create")}
          />
        </div>

        {/* King Of The Hill */}
        <div className={`my-[30px] mt-[50px]`}>
          <h1
            className={`text-[40px] text-center font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-orange-500 to-yellow-500 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)] italic`}
          >
            King of The Hill
          </h1>

          <div className={`my-[20px] flex justify-center`}>
            <TokenBox
              created_by={tokens[0].created_by}
              created_time={tokens[0].created_time}
              market_cap={tokens[0].market_cap}
              replies_count={tokens[0].replies_count}
              token_name={tokens[0].token_name}
              token_ticker={tokens[0].token_ticker}
            />
          </div>
        </div>

        {/* Search Box */}
        <div
          className={`space-y-[20px] lg:space-y-0 lg:flex items-center justify-center space-x-0 lg:space-x-[10px] px-[16px]`}
        >
          <input
            type="text"
            placeholder="Search token"
            className={`outline-none w-full lg:w-[400px] p-[10px] text-primary rounded-[4px]`}
          />
          <PrimaryButton title={"Search"} width={"100%"} />
        </div>

        {/* Terminal Section */}
        <div
          className={`my-[50px] px-[16px] lg:px-[100px] text-center lg:text-left`}
        >
          <p className={`text-white cursor-pointer text-[24px]`}>
            Listed Coins
          </p>

          <div
            className={`my-[30px] lg:grid grid-cols-3 gap-[20px] space-y-[20px] lg:space-y-0`}
          >
            {tokens.map((token) => (
              <TokenBox
                key={token.id}
                created_by={token.created_by}
                created_time={token.created_time}
                market_cap={token.market_cap}
                replies_count={token.replies_count}
                token_name={token.token_name}
                token_ticker={token.token_ticker}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Landing;
