import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEye } from "react-icons/fa";

import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // console.log(product);
  //destructure  the product

  const { id, image, category, title, price } = product;
  return (
    <>
      <div>
        <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
          {id}
          <div className="w-full h-full flex ">
            {/* image  */}
            <div className="w-[200] mx-auto flex  justify-center items-center">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-300"
                src={image}
                alt={title}
              />
            </div>

            {/* button */}

            <div className="absolute top-0 right-0 bg-red-500 opacity-0 group-hover:opacity-100">
              <button onClick={() => addToCart(product, id)}>
                <div className="flex justify-center items-center text-white  w-10 h-10">
                  <FaPlus className="text-2xl" />
                </div>
              </button>
              <Link
                to={`/product/${id}`}
                className="flex justify-center items-center w-10 h-10 bg-white text-primary drop-shadow-xl "
              >
                <FaEye className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm capitalize text-gray-500 mb-1">
            {category}
          </div>
          <div className=" font-semibold text-sm mb-2">
            <Link to={`/product/${id}`}>{title}</Link>{" "}
          </div>
          <div className="font-semibold text-gray-800">$ {price}</div>
        </div>
      </div>
    </>
  );
};

export default Product;
