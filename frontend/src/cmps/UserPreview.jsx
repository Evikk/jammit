import { useHistory } from "react-router-dom";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { iconService } from '../services/iconService.js'

export function UserPreview({ user }) {

    const history = useHistory()
    return (
        <li className="user-card flex column" onClick={()=>history.push(`/user/${user._id}`)}>
            <div className="thumb flex column pos-relative">
                <div className="img-wrapper flex justify-center">
                    <img className="user-card thumb" src={user.imgUrl} className="userThumb" alt="user-thumbnail"/>
                    <div className="user-inst-icons-wrapper">
                        {iconService.displayUserIcons(user)}
                    </div>
                </div>
            </div>
            <div className="user-card-content flex column">
                <h2>{user.username}</h2>
                <ul className="user-card-tags flex">{user.tags.map((tag, idx) => {
                    if (idx < 3) return <li key={idx}>{tag}</li> })}
                </ul>
                <p className="gray"><LocationOnOutlinedIcon/>{user.location.city}</p>
            </div>
        </li>
    );
}