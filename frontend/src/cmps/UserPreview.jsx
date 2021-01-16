import { useHistory } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';

export function UserPreview({ user }) {
    const history = useHistory()
    return (
        <li className="jam-card flex column" onClick={()=>history.push(`/user/${user._id}`)}>
            <h2>{user.username}</h2>
                <img className="jam-card thumb" src={user.imgUrl} className="jamThumb" alt="user-thumbnail"/>
            <div className="flex ">
                <div className="jam-card-content flex column">
                    
                    <ul className="jam-card-tags flex">{user.tags.map((tag, idx) => {
                        if (idx < 3) return <li key={idx}>{tag}</li> })}
                    </ul>
                    <p><LocationOnIcon/>{user.location.city}</p>
                </div>
            </div>
        </li>
    );
}