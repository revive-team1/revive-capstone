
import React from 'react'
import { useState } from 'react';

export default function Checklist() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAddItem = () => {
      if (inputValue.trim() !== '') {
        setItems([...items, { text: inputValue, checked: false }]);
        setInputValue('');
      }
    };
  
    const toggleItem = (index) => {
      const updatedItems = [...items];
      updatedItems[index].checked = !updatedItems[index].checked;
      setItems(updatedItems);
    };
  
    return (
      <div>
        <h2>Self Care Checklist</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Self Care Activity"
        />
        <button onClick={handleAddItem}>Add</button>
        <ul>
          {items.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(index)}
              />
              <span
                style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </ul>
      </div>
    );
  }