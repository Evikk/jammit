import { useHistory } from "react-router-dom";

export function JamUserPreview({ user }) {
    const history = useHistory()
    return (
        <li >
            <div className="jammers" >
                <img  src={user.imgUrl} alt="" onClick={() => history.push(`/user/${user._id}`)}/>
            
            <h4 className="jammers-list-name">{user.fullname}</h4>
            <div>
            {user.playing.map(function (instrument, index) {
                  return <span key={index} className="instrument-title"> {instrument}</span>
             })}    
             </div>
             </div>
          
        </li>
    );
}