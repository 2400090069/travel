import React, { useState } from 'react';

const MenuCard = ({ menu, onSelect }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (item) => {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter(i => i !== item)
      : [...selectedItems, item];
    setSelectedItems(updatedItems);
    onSelect(menu.type, updatedItems);
  };

  return (
    <div className="menu-card">
      <h3>{menu.title}</h3>
      <div className="menu-items">
        {menu.items.map((item, index) => (
          <div key={index} className="menu-item">
            <input
              type="checkbox"
              id={`${menu.type}-${index}`}
              checked={selectedItems.includes(item)}
              onChange={() => handleItemSelect(item)}
            />
            <label htmlFor={`${menu.type}-${index}`}>
              <div className="menu-item-content">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span className="price">${item.price}</span>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>
      {selectedItems.length > 0 && (
        <div className="selected-summary">
          <h4>Selected Items:</h4>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
          <p>Total: ${selectedItems.reduce((sum, item) => sum + item.price, 0)}</p>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
