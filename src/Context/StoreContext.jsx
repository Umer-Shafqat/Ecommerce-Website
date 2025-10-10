import { createContext, useState } from "react";
import { display_items } from "../assests/assests"; // ✅ import your products

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
      const updated = { ...prev };
      if (updated[itemId] > 1) updated[itemId]--;
      else delete updated[itemId];
      return updated;
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        const itemInfo = display_items.find((p) => p._id === item);
        if (itemInfo) total += cartitems[item] * itemInfo.price;
      }
    }
    return total;
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
