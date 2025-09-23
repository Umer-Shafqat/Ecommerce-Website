import React from "react";
import { item_list } from "../../assests/assests";
import "./Mainbody.css";

function MainBody({ setCategory }) {
  return (
    <div className="mainbody">
      {item_list.map((item) => (
        <div
          className="category-box"
          key={item.id}
          onClick={() => setCategory(item.box_name)} // 🔥 switch category
        >
          <h3 className="box-title">{item.box_name}</h3>
          <img src={item.box_img} alt={item.box_name} className="box-img" />
          <p className="see-now">See Now</p>
        </div>
      ))}
    </div>
  );
}

export default MainBody;
