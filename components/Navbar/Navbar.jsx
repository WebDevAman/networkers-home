import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logo.jpeg";
import { FiChevronDown } from "react-icons/fi";
import Button from "../Buttons";
import { FiMenu } from "react-icons/fi";
import { FlatTree } from "framer-motion";
import NavDrawer from "./Drawer";
import DummyBtn from "../DummyBtn";

const SubMenu = ({ openSubmenu, setSubmenu, type }) => {
  return (
    <div
      onMouseEnter={() => setSubmenu(true)}
      onMouseLeave={() => setSubmenu(false)}
      className="cursor-pointer absolute z-[9999999999999999999999] top-4 left-10 px-5 py-4 rounded-md  w-[400px] text-black shadow-xl"
    >
  
      <div className="flex items-start py-3 flex-col space-y-1 border-b-[1px] border-gray-500">
        <h1 className="font-medium text-lg hover:text-gray-500 text-gray-700">Cyberx Masters</h1>
        <p className="text-xs text-gray-600">
          100% Placement program in Cyber Security
        </p>
      </div>
      <div className="flex items-start py-3 flex-col space-y-1 border-b-[1px] border-gray-500">
        <h1 className="font-medium text-lg hover:text-gray-500 text-gray-700">Cloud Masters</h1>
        <p className="text-xs text-gray-600">
          100% Placement program in MultiCloud and Cloud Security
        </p>
      </div>
      <div className="flex items-start py-3 flex-col space-y-1 border-b-[1px] border-gray-500">
        <h1 className="font-medium text-lg hover:text-gray-500 text-gray-700">CCIE Enterprise</h1>
        <p className="text-xs text-gray-600">
          {" "}
          100% Placement Most demanded Networking Certification{" "}
        </p>
      </div>
      <div className="flex items-start py-3 flex-col space-y-1 border-b-[1px] border-gray-500">
        <h1 className="font-medium text-lg hover:text-gray-500 text-gray-700">CCIE Security</h1>
        <p className="text-xs text-gray-600">
          100% Placement Most demanded Networking Certification
        </p>
      </div>
    </div>
  );
};

const MenuItems = ({ setSubmenu, type, setType, openSubmenu }) => {
  return (
    <div className="md:flex  items-center relative text-sm md:text-md space-x-7 mb-2 hidden ">
      {["Home", "Placements Programs", "Courses"].map((item, i) => (
        <div className="flex flex-col">
          <div
            className="flex  items-center space-x-2"
            onMouseEnter={() => {
              setSubmenu(true);
              setType(item);
            }}
          >
            <li
              onMouseLeave={() => setSubmenu(false)}
              className="list-none  link different font-semibold text-gray-700 cursor-pointer"
            >
              {item}
            </li>
            {item === "Placements Programs" && (
              <p className="cursor-pointer">
                {" "}
                <FiChevronDown />{" "}
              </p>
            )}
          </div>
        </div>
      ))}
      {openSubmenu && type === "Placements Programs" && (
        <SubMenu
          openSubmenu={openSubmenu}
          setSubmenu={setSubmenu}
          type={type}
        />
      )}
    </div>
  );
};

const Navbar = () => {
  const [openSubmenu, setSubmenu] = useState(false);
  const [type, setType] = useState("");
  const [open,setOpen]=useState(false)

  return (
    <div className="min-w-screen relative flex  py-2 items-center justify-between px-6">
           <NavDrawer open={open} setOpen={setOpen} />
      {/* left side  */}
      <div className="flex items-center space-x-10 ">
        {/* logo  */}
        <div className="w-[200px] lg:w-[300px]">
          <Image src={logo} width={300} height={70} objectFit="contain" />
        </div>
        {/* nav items  */}
        <MenuItems
          setSubmenu={setSubmenu}
          openSubmenu={openSubmenu}
          type={type}
          setType={setType}
        />
      </div>

      {/* right side  */}
      <div className="mb-2.5 md:mb-3 lg:mb-5 lg:pr-10 ">
        {/* <Button text={"Contact Us"} styles={"bg-blue-600 text-white py-2 px-5 md:px-4"} /> */}
        <DummyBtn text='Contact Us' />
      </div>

      <div className="md:hidden mb-2.5 cursor-pointer p-3 bg-white shadow-md rounded-full" onClick={()=>setOpen(true)} >
        <FiMenu className="text-xl" />
      </div>
    </div>
  );
};

export default Navbar;
