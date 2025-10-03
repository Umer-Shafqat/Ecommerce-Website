import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react"; // <-- add state
import { display_items } from "../../assests/assests";
import "./IndividualDetail.css";

const IndividualDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by id
  const item = display_items.find((i) => i._id === id);

  // Counter state
  const [count, setCount] = useState(0);

  if (!item) {
    return <p style={{ padding: "20px" }}>⚠️ Item not found!</p>;
  }

  // Handlers
  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="detail-container">
      {/* Back Button */}
      <button onClick={() => navigate(-1)}>← Back</button>

      {/* Product Card */}
      <div className="detail-card">
        {/* Product Image */}
        <img src={item.image} alt={item.name} className="detail-img" />

        {/* Product Info */}
        <div className="detail-info">
          <h2>{item.name}</h2>
          
          <p className="detail-price">${item.price}</p>

          <p className="detail-description">
            {item.description || "No description available."}
          </p>

<p className="add-counter-heading">Add Quantity</p>
     {/* Counter Section */}
<div className="counter-container">
  {count === 0 ? (
    
    <img
      src={require("../../assests/add_icon.png")}
      alt="add"
      className="counter-btn add-btn"
      onClick={increase}
    />
  ) : (
    <>
      <img
        src={require("../../assests/remove_icon_red.png")}
        alt="remove"
        className="counter-btn remove-btn"
        onClick={decrease}
      />
      <span className="counter-value">{count}</span>
      <img
        src={require("../../assests/add_icon_green.png")}
        alt="add"
        className="counter-btn add-btn"
        onClick={increase}
      />
    </>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default IndividualDetail;
