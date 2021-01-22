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
            <div className="user-basic-info">
                <div className="user-img">
                    <img src={user.imgUrl} />
                </div>
                <div className="user-tags-name flex column">
                    <span className="user-stage-name fs30">{user.username}</span>
                    <div className="user-location">
                        <LocationOnOutlinedIcon style={{ fontSize: 15 }} className="location-icon" />
                        <span>{user.location.city}</span>
                    </div>
                    <div className="flex space-between align-center">
                        <ul className="flex user-tags">{user.talents.map((talent, idx) => {
                            return <li key={idx}>{talent}</li>
                        })}
                        </ul>
                        {!isUserAdmin && <div className="reaction-icon">
                            <ChatRoundedIcon style={{fontSize: 40}}/>
                            {!followToggle ? <FavoriteBorderRoundedIcon style={{fontSize: 40}} onClick={()=>onFollowIconClick()}/>
                            : <FavoriteRoundedIcon style={{fontSize: 40}} onClick={()=>onFollowIconClick()}/>}  
                        </div>}
                    </div>
                </div>
            </div>
            <div className="user-about">
                <span>{user.about}</span>
            </div>
        </div>
        
    )
}