import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import CartItem from "./CartItem";

import { CartContext } from "../contexts/CartContext";
import { FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { cart } = useContext(CartContext);
  console.log(useContext(CartContext));
  return (
    <div
      className={`fixed top-0 right-0 bg-white shadow-lg h-full w-full md:w-[35vw] xl:max-w-[30vw] transition-transform ${
        isOpen ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-6 border-b ">
        <div className="font-semibold uppercase text-gray-500">
          Shopping bag (0)
        </div>
        <div className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <FaArrowRight
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          />
        </div>
      </div>

      <div>
        {cart.map((item) => {
          return (
            <CartItem item={item} key={item.id}>
              {item.title}
            </CartItem>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
