import { useContext } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartitems, items_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {items_list.map((item, index) => {
          if (cartitems[item.id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitems[item.id]}</p>
                  <p>${item.price * cartitems[item.id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item.id)}>
                    ✕
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="hr" />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 6}</p>
            </div>
            <hr className="hr" />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + 6}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a Promo Code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter your code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
