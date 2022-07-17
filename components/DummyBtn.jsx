import React from "react";

const DummyBtn = ({ text }) => {
  return (
    // <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-white bg-gray-800 border border-gray-100 rounded-lg shadow-inner group">
    // <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
    // <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
    // <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
    // <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white-600 group-hover:h-full ease"></span>
    // <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-blue-700 opacity-0 group-hover:opacity-100"></span>
    // <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">{text}</span>
    // </a>
    // <a
    //   href="#_"
    //   className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
    // >
    //   <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
    //     <svg
    //       className="w-6 h-6"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         d="M14 5l7 7m0 0l-7 7m7-7H3"
    //       ></path>
    //     </svg>
    //   </span>
    //   <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
    //     {text}
    //   </span>
    //   <span className="relative invisible">{text}</span>
    // </a>
    <button className='rounded-full px-8 py-3 text-lg bg-blue-700 text-white hover:bg-blue-800 transition-all duration-500 hover:shadow-lg'>
      {text}
    </button>

  );
};

export default DummyBtn;
