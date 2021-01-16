import { useHistory } from "react-router-dom";

export function JamUserPreview({ user }) {
    const history = useHistory()
    return (
        <li onClick={() => history.push(`/user/${user._id}`)}>
            <div className="jammers" >
                <img  src={user.imgUrl} alt="" />
            </div>
            <h4>{user.fullname}</h4>
            {/* <div>
            {user.playing.map(function (instrument, index) {
                  return <span key={index}> {instrument}</span>
             })}    
             </div> */}
        </li>
    );
}