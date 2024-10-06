import React from "react";

const CircularLoader = ({ title }) => {
  return (
    <div
      className={`flex justify-center items-center bg-white p-[20px] rounded-[8px]`}
    >
      <div className={`space-y-[20px]`}>
        <div className={`flex justify-center`}>
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CircularLoader;
