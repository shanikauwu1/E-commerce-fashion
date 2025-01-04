import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // total items
  const [itemAmount, setitemAmount] = useState(0);

  // add to cart funtion
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //
    //check the item already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //  remove cart items
  const removeCartItem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  //increase amount
  const amountIncrease = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //descrease amount
  const amountDescrease = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeCartItem(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCartItem,
        clearCart,
        amountIncrease,
        amountDescrease,
        itemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
