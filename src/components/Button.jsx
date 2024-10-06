import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const PrimaryButton = ({ title, onClick, width }) => {
  return (
    <div className={`flex`}>
      <div
        onClick={onClick}
        className={`bg-primary rounded-[8px] p-[10px] cursor-pointer flex justify-center`}
        style={{ width: width ? width : "100px" }}
      >
        <p className={`font-poppins text-white`}>{title}</p>
      </div>
    </div>
  );
};

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className={`flex`}>
      <div
        className={`bg-primary p-[20px] rounded-full text-white cursor-pointer`}
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack size={20} />
      </div>
    </div>
  );
};

export const OutlinedButton = ({ title, onClick, width, icon }) => {
  return (
    <div className={`flex`}>
      <div
        onClick={onClick}
        className={`bg-transparent rounded-[8px] p-[10px] 
          cursor-pointer flex justify-center border border-primary`}
        style={{ width: width ? width : "100px" }}
      >
        <div className={`flex items-center ${icon && `space-x-[10px]`}`}>
          {icon && icon}
          <p className={`font-poppins text-white`}>{title}</p>
        </div>
      </div>
    </div>
  );
};
