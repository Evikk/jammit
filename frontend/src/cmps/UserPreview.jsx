import { useHistory } from "react-router-dom";
export function UserPreview({ user }) {
    const history = useHistory()
    return (
        <li className="user-card">
            {/* <img src={user.img_url} className="user-img" alt="user"/> */}
            <div className="user-card-title" onClick={()=>history.push(`/user/${user._id}`)}>
                    <h2>{user.username}</h2>
            </div>
            <div className="user-card-badges">
                <ul>{user.talents.map((talent, idx) => {
                    return <li key={idx}>{talent}</li>
                })}</ul>
                <p>{user.location.city}</p>
            </div>
        </li>
    );
}