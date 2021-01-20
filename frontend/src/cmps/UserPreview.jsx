import { useHistory } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {instIcons} from '../assets/img/inst-icons/icons.js'

export function UserPreview({ user }) {

    function showIcons() {
        return instIcons.map((icon, idx)=>{
            const talent = user.talents.find(talent=>{
                return (talent === Object.keys(icon)[0])
            })
            if (talent) return <img key={idx} className="user-inst-icon" src={Object.values(icon)[0]} alt="instrument"/>
        })
    }

    const history = useHistory()
    return (
        <li className="user-card flex column" onClick={()=>history.push(`/user/${user._id}`)}>
            <div className="thumb flex column pos-relative">
                <div className="img-wrapper flex justify-center">
                    <img className="user-card thumb" src={user.imgUrl} className="userThumb" alt="user-thumbnail"/>
                    <div className="user-inst-icons-wrapper">
                        {showIcons()}
                    </div>
                </div>
            </div>
            <div className="user-card-content flex column">
                <h2>{user.username}</h2>
                <ul className="user-card-tags flex">{user.tags.map((tag, idx) => {
                    if (idx < 3) return <li key={idx}>{tag}</li> })}
                </ul>
                <p><LocationOnIcon/>{user.location.city}</p>
            </div>
        </li>
    );
}