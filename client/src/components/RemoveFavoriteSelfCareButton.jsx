
export default function RemoveFavoriteSelfCareButton({ activity, favoriteSelfCareList, setFavoriteSelfCareList }) {

    async function handleClick() {
      try {
        // const response = await fetch(`http://localhost:8080/api/favoriteSelfCare/${activity.favorite_id}`, {
        const response = await fetch(`https://revive-capstone.onrender.com/api/favoriteSelfCare/${activity.favorite_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result)
       
        setFavoriteSelfCareList(favoriteSelfCareList.filter((activity) => activity.favorite_id !== result.favorite_id));
      } catch (error) {
      }
    }
    return (
      <div className="deleteButton">
        <button  className="btn btn bi bi-trash" onClick={() => {
          handleClick();
        }}></button>
      </div>
    );
  };