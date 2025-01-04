import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import CartItem from "./CartItem";

import { CartContext } from "../contexts/CartContext";
import { FaArrowRight, FaTrashAlt } from "react-icons/fa";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { cart, clearCart, total } = useContext(CartContext);
  console.log(useContext(CartContext));
  return (
    <div
      className={`fixed top-0 right-0 z-30 bg-white shadow-lg h-full w-full md:w-[35vw] xl:max-w-[30vw] transition-transform ${
        isOpen ? "transform translate-x-0" : "transform translate-x-full "
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

      <div className=" h-[520px] lg:h-[640px]  flex flex-col overflow-y-auto overflow-x-hidden ">
        {cart.map((item) => {
          return (
            <CartItem item={item} key={item.id}>
              {item.title}
            </CartItem>
          );
        })}
      </div>
      {/* total amount */}
      <div className="flex items-center justify-between px-4 mt-4">
        <div className=" uppercase text-sm font-semibold text-gray-700">
          <span className="mr-4">Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>

        <div>
          <div
            onClick={() => {
              clearCart();
            }}
            className="p-4 bg-red-600 text-white"
          >
            <FaTrashAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
