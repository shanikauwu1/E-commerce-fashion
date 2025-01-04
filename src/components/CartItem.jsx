import { Link } from "react-router-dom";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeCartItem, amountIncrease, amountDescrease } =
    useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex px-6 border-b ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <div>
          <Link to={`/product/${id}`}>
            <img className="max-w-[80px]" src={image} alt={title} />
          </Link>
        </div>

        {/* title n remove items */}
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-primary max-w=[240px]  uppercase text-xs hover:underline"
            >
              {title}
            </Link>
            <div onClick={() => removeCartItem(id)}>
              <FaTimes className="text-gray-500 cursor-pointer hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-4 h-[36px] text-xs">
            {/* quantity div */}
            <div className="flex justify-between  text-sm font-medium max-w-[100px] flex-1 border">
              <div className="flex-1 h-full flex justify-center items-center px-2 ">
                <FaMinus
                  onClick={() => {
                    amountDescrease(id);
                  }}
                />
              </div>
              <div className="h-full flex justify-center items-center px-2 ">
                {amount}
              </div>
              <div className="flex-1 h-full flex justify-center items-center px-2 ">
                <FaPlus
                  onClick={() => {
                    amountIncrease(id);
                  }}
                />
              </div>
            </div>
            <div className="flex-1 flex justify-around items-center ">
              ${price}
            </div>
            <div className="flex-1 flex justify-end text-sm font-semibold items-center">
              ${parseFloat(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
