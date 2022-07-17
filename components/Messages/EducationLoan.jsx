import React from "react";

const EducationLoan = () => {
  return (
    <div className="min-w-screen h-[60px] flex items-center justify-center bg-blue-600">
      <div className="flex space-x-10 items-center">
        <h1 className="font-bold text-xs sm:text-sm md:text-md text-white">
          100% Educational Loan available at 0% interest rate
        </h1>
        <button className="text-white py-2  md:py-2 hover:bg-blue-800 rounded-md text-xs md:text-md font-semibold px-3 bg-blue-900">
          Call us
        </button>
      </div>
    </div>
  );
};

export default EducationLoan;
