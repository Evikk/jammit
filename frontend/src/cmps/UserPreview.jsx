import { useHistory } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';

export function UserPreview({ user }) {
    const history = useHistory()
    return (
        <li className="user-card flex column" onClick={()=>history.push(`/user/${user._id}`)}>
            <div className="img-wrapper flex justify-center">
                <img className="user-card thumb" src={user.imgUrl} className="userThumb" alt="user-thumbnail"/>
            </div>
            <h2>{user.username}</h2>
            <div className="flex">
                <div className="user-card-content flex column">
                    
                    <ul className="user-card-tags flex">{user.tags.map((tag, idx) => {
                        if (idx < 3) return <li key={idx}>{tag}</li> })}
                    </ul>
                    <p><LocationOnIcon/>{user.location.city}</p>
                </div>
            </div>
        </li>
    );
}