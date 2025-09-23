import React from 'react'
import './Displayitems.css'
import { display_items } from '../../assests/assests'

const Exploremenu = ({ category, setCategory }) => {
  // Get unique categories from display_items
  const categories = [...new Set(display_items.map(item => item.category))];

  return (
    <div className='explore-menu' id='explore-menu'>
      <div className="explore-menu-list">
        {categories.map((cat, index) => (
          <div
            onClick={() => setCategory(prev => prev === cat ? "All" : cat)}
            key={index}
            className='explore-menu-list-item'
          >
            {/* You can replace with a representative image per category if you want */}
          <img
  className={category === cat ? "active" : ""}
  src={display_items.find(item => item.category === cat)?.image || ""}
  alt={cat}
/>
            <p>{cat}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu;
