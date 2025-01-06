import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //get the product using id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  //console.log(product);
  if (!product) {
    return <div>Loading ....</div>;
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center   ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center  mb-8  lg:mb-0">
            <img
              className="max-w-[200px] lg:max-[350px]"
              src={image}
              alt={title}
            />
          </div>
          <div className=" flex-1 text-center lg:text-left">
            <h1 className="uppercase font-semibold mb-2">{title}</h1>
            <p className=" font-semibold mb-2 text-xl text-red-800">${price}</p>
            <p className=" font-light mb-2">{description}</p>
            <button
              className="bg-gray-800 text-white py-2 px-6 text-xs shadow-md"
              onClick={() => {
                addToCart(product, product.id);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
