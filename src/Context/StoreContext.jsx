import { createContext, useState } from "react";
import { display_items } from "../assests/assests"; 

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartitems, setCartitems] = useState({});

  const addToCart = (itemId) => {
    setCartitems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartitems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartitems) {
      const itemInfo = display_items.find(
        (product) => product._id === itemId
      );
      if (itemInfo) {
        totalAmount += cartitems[itemId] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    display_items,
    cartitems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
