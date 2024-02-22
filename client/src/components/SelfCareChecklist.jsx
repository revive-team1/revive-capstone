
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SelfCareChecklist({ user }) {
  const navigate = useNavigate()
  const [favoriteSelfCare, setFavoriteSelfCare] = useState([])
  useEffect(() => {
    async function fetchFavoriteSelfCare() {
      try {
        const response = await fetch(`http://localhost:8080/api/favoriteSelfCare/user/${user.user_id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result)
        setFavoriteSelfCare(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFavoriteSelfCare();
  }, []);

  // if (!favoriteSelfCare.length) {
  //   return (
  //     <>
  //       <div className="favoritesContainer">
  //         <p className="noFavoritesMessage">You do not currently have any Self Care activities saved.</p>
  //         <div className="favoritesPageButton">
  //           <br />
  //           <button onClick={() => {
  //             navigate(`/selfcare`);
  //           }}>Explore Self Care Activities</button>
  //         </div>
  //       </div>
  //     </>)
  // }

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
    <div className="checklistCard">
      <h3 className="favoritesHeading">{`${user.firstname}`}'s Self Care Checklist</h3>
      <div className="breakLine"></div>
      <br />
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
};

