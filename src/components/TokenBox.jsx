import React from "react";
import DefaultCoin from "./DefaultCoin";

const TokenBox = ({
  image,
  created_by,
  created_time,
  market_cap,
  replies_count,
  token_name,
  token_ticker,
}) => {
  return (
    <div
      className={`flex items-center border-[1px] 
      border-[#777] p-[10px] px-[20px] space-x-[80px] rounded-[8px] 
      cursor-pointer hover:border-primary duration-100`}
    >
      <div className={`flex justify-center`}>
        {image ? <img src={image} /> : <DefaultCoin />}
      </div>
      <div className={`text-white space-y-[10px]`}>
        <p className={`text-blue-200`}>Created By: {created_by}</p>
        <p className={`text-blue-400`}>Time Created: {created_time}</p>
        <p className={`text-green-400`}>Market Cap: {market_cap}</p>
        <p className={`text-blue-400`}>Replies: {replies_count}</p>

        <div className={`flex items-center space-x-[10px]`}>
          <p className={`font-[700] text-[24px]`}>{token_name}</p>
          <p className={`font-[500] text-[18px]`}>Ticker: [{token_ticker}]</p>
        </div>
      </div>
    </div>
  );
};

export default TokenBox;
