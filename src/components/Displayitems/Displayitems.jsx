import React from "react";
import "./Displayitems.css";
import { display_items } from "../../assests/assests";

const DisplayItems = ({ category, setCategory }) => {
  const filteredItems = display_items.filter(
    (item) => item.category === category
  );

  return (
    <div className="display-items">
      <h2 className="display-header">{category}</h2>

      {filteredItems.length > 0 ? (
        <div className="items-grid">
          {filteredItems.map((item) => (
            <div className="display-item" key={item._id}>
              <img src={item.image} alt={item.name} className="item-img" />
              {item.discount && (
                <p className="discount">{item.discount}% off • Limited Deal Time</p>
              )}
              <h3 className="item-name">{item.name}</h3>
              {item.rating && <p className="item-rating">⭐ {item.rating} / 5</p>}
              <p className="item-price">${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items found for this category.</p>
      )}
       <button className="footer-panel1" onClick={() => setCategory("All")}>
            Back to top
      </button>
    </div>
  );
};

export default DisplayItems;
