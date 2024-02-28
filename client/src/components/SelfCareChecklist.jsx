
import { useEffect, useState } from "react";
import { useNavigate }  from 'react-router-dom';
import RemoveFavoriteSelfCareButton from "./RemoveFavoriteSelfCareButton";

export default function SelfCareChecklist({ user }) {
  const navigate = useNavigate()
  const [favoriteSelfCareList, setFavoriteSelfCareList] = useState([])
  useEffect(() => {
    async function fetchFavoriteSelfCareList() {
      try {
        // const response = await fetch(`http://localhost:8080/api/favoriteSelfCare/user/${user.user_id}`, {
        const response = await fetch(`https://revive-capstone.onrender.com/api/favoriteSelfCare/user/${user.user_id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result)
        setFavoriteSelfCareList(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFavoriteSelfCareList();
  }, []);

  const [items, setItems] = useState([]);
  
  const toggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  return (
    <div className="checklistCard card">
      <h3 className="favoritesHeading">{`${user.firstname}`}'s Self Care Checklist</h3>
      <div className="breakLine"></div>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Activity Name</th>
            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody className="checklistBody">
          {favoriteSelfCareList.map((activity, index) => (
            <tr key={index}>
              <td>< RemoveFavoriteSelfCareButton
                activity={activity}
                favoriteSelfCareList ={favoriteSelfCareList}
                setFavoriteSelfCareList={setFavoriteSelfCareList}/></td>
              <td>{activity.name}</td>
              <td>{activity.description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={activity.checked}
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

