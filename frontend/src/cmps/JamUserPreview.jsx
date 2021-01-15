import { useHistory } from "react-router-dom";

export function JamUserPreview({ user }) {
    const history = useHistory()
    return (
        <li onClick={() => history.push(`/user/${user._id}`)}>
            <h3>{user.fullname}</h3>
            <div >
                <img  src={user.imgUrl} alt="" />
            </div>
            {/* <div>
            {user.playing.map(function (instrument, index) {
                  return <span key={index}> {instrument}</span>
             })}    
             </div> */}
        </li>
    );
}