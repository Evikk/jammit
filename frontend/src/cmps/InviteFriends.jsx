import { useHistory } from "react-router-dom";

export function FriendsInvitePreview({ user }) {
    const history = useHistory()
    return (
        <li >
            <div className="jammers invite-list">
                <div>
                    <img className="invite-list-img" onClick={() => history.push(`/user/${user._id}`)} src={user.imgUrl} alt="" />
                    <h4 className="invite-list-name">{user.fullname}</h4>
                </div>
                <input type="checkbox"></input>
                {/* <div>
                    {user.playing.map(function (instrument, index) {
                        return <span key={index} className="instrument-title"> {instrument}</span>
                    })}
                </div> */}
            </div>

        </li>
    );
}