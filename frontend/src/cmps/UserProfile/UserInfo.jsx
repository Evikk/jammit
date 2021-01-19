import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { useHistory } from 'react-router';


export function UserInfo({user, followToggle, onFollowIconClick, isUserAdmin}) {
    const history = useHistory()
    return (
        <div className="user-left-box flex column">
            <div className="user-basic-info flex">
                <div className="user-img">
                    <img src={user.imgUrl} />
                </div>
                <div className="user-tags-name flex column">
                    <span className="user-stage-name fs30">{user.username}</span>
                    <div className="user-location">
                    <LocationOnOutlinedIcon className="location-icon" />
                    <span>{user.location.city}</span>
                    </div>
                    <ul className="user-tags flex">{user.tags.map((tag, idx) => {
                            return <li key={idx}>{tag}</li> })}
                    </ul>
                </div>
            </div>
            <div className="user-about">
                <span>{user.about}</span>
            </div>
            {!isUserAdmin && <div className="reaction-icon">
                <ChatRoundedIcon style={{fontSize: 40}}/>
                {!followToggle ? <FavoriteBorderRoundedIcon style={{fontSize: 40}} onClick={()=>onFollowIconClick()}/>
                : <FavoriteRoundedIcon style={{fontSize: 40}} onClick={()=>onFollowIconClick()}/>}  
            </div>}
        </div>
        
    )
}