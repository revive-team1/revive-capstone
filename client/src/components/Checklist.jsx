
import React from 'react'
import { useState } from 'react';

export default function SelfCareChecklist() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleAddItem = () => {
      if (name.trim() !== '' && description.trim() !== '') {
        setItems([...items, { name: name, description: description, checked: false }]);
        setName('');
        setDescription('');
      }
    };
  
    const toggleItem = (index) => {
      const updatedItems = [...items];
      updatedItems[index].checked = !updatedItems[index].checked;
      setItems(updatedItems);
    };
  
    return (
      <div classname="checklistCard">
        <h2>Self Care Checklist</h2>
        <div className="breakLine"></div>
        <br/>
        <input
          className="checklistInput"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Self Care Activity"
        />
        <input
          className="checklistInput"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <button onClick={handleAddItem}>Add</button>
        <table className="checklistTable">
          <thead>
            <tr>
              <th>Activity Name</th>
              <th>Description</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody className="checklistBody">
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleItem(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  