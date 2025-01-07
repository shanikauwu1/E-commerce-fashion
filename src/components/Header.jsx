import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartPlus, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div
      className={` ${
        isActive ? "bg-gray-300" : "bg-red-200"
      }  w-full px-8 py-2  flex  items-center justify-between fixed mb-12 z-10 border-b shadow-sm `}
    >
      <Link to={"/"}>
        <div className="text-3xl flex items-center">
          <img src={logo} alt="Rayeli's textiles" className="h-[60px] w-auto" />{" "}
          <span className="ml-2 text-xl uppercase ">Fashions</span>
        </div>
      </Link>

      <div onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center ">
          <FaCartPlus className="text-3xl relative " />
          <div className="bg-red-500 text-white p-1 rounded-full text-xs absolute top-[20px] right-[30px]">
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
