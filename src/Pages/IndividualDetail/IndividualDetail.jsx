import { useParams, useNavigate } from "react-router-dom";
import { display_items } from "../../assests/assests";
import "./IndividualDetail.css";

const IndividualDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by id
  const item = display_items.find((i) => i._id === id);

  if (!item) {
    return <p style={{ padding: "20px" }}>⚠️ Item not found!</p>;
  }

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

          {item.discount && <p>{item.discount}% OFF • Limited Time</p>}
          {item.rating && <p>⭐ {item.rating} / 5</p>}

          <p className="detail-price">${item.price}</p>

          <p className="detail-description">
            {item.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualDetail;
