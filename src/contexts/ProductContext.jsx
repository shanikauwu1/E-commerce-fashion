import React, { createContext, useState, useEffect } from "react";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //Product states
  const [products, setProducts] = useState([]);

  // fetch products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        //  console.log(data); // Verify the data structure
        setProducts(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
