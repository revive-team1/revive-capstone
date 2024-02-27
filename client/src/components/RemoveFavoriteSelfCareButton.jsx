
export default function RemoveFavoriteSelfCareButton({ favoriteSelfCare, setFavoriteSelfCare }) {

    async function handleClick() {
      try {
        const response = await fetch(`http://localhost:8080/api/favoriteSelfCare/${favoriteSelfCare.selfCare_id}`, {
        // const response = await fetch(`https://revive-capstone.onrender.com/api/favoriteSelfCare/${favoriteSelfCare.selfcare_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        console.log(result)
       
        setFavoriteSelfCare(favoriteSelfCare.filter((favoriteSelfCare) => favoriteSelfCare.selfCare_id !== result.selfCare_id));
      } catch (error) {
      }
    }
    return (
      <div >
        <button className="bi bi-trash" onClick={() => {
          handleClick();
        }}></button>
      </div>
    );
  };