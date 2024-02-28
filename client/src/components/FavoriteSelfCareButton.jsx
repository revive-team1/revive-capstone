
export default function FavoriteSelfCareButton({ user_id, selfCare_id, setFavoriteSelfCare }) {
    async function handleClick() {
        try {
            // const response = await fetch('http://localhost:8080/api/favoriteSelfCare', {
            const response = await fetch('https://revive-capstone.onrender.com/api/favoriteSelfCare', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_id, selfCare_id }),
            });
            const result = await response.json();
            console.log(result)
            setFavoriteSelfCare(result);
        } catch (error) {
        };
    };

    return (
        <div className="favoriteButton">
            <button className='btn btn-outline-dark' type='button' role='button' onClick={() => {
                handleClick();
                alert("This self care activity has been added to your checklist!")
            }}>Add to Self Care Checklist</button>
        </div>
    );
};