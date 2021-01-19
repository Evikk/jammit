import LocationOnIcon from '@material-ui/icons/LocationOn';
import {instIcons} from '../assets/img/inst-icons/icons.js'
import { Link } from "react-router-dom";

export function JamPreview({ jam }) {

    function showIcons (){
        return instIcons.map(icon=>{
            const user = jam.usersGoing.find(user => {
                return user.playing.some(inst=>{
                    const instName = Object.keys(icon)[0]
                    return instName === inst
                })
            })
            if (user) return <img className="inst-icon" src={Object.values(icon)[0]} alt="instrument"/>
        })
    }

    const slotsLeft = jam.capacity - jam.usersGoing.length
    
    return (
        <Link to={`/jam/${jam._id}`}><li className="jam-card flex column">
            <div className="thumb-wrapper flex column pos-relative">
                <img className="jam-thumb" src="https://res.cloudinary.com/dhplco0k4/image/upload/v1610961691/jameet/jam1_cgx6jw.jpg" alt="jam-thumbnail"/>
                <div className="inst-icons-wrapper">
                    {showIcons()}
                </div>
            </div>
            <div className="jam-card-content flex">
                <div className="date-wrapper">
                    <div className="date-month">
                        {new Intl.DateTimeFormat('il', { month: 'short' }).format(new Date(jam.startsAt))}
                    </div>
                    <div className="date-day">
                        {new Date(jam.startsAt).toLocaleString('he-IL',{day: '2-digit'})}
                    </div>
                </div>
                <div className="jam-details-wrapper">
                    <h2>{jam.title}</h2>
                
                    <ul className="jam-card-tags flex">{jam.tags.map((tag, idx) => {
                        return <li key={idx}>{tag}</li> })}
                    </ul>
                
                    <div>
                        <p><LocationOnIcon/>{jam.location.city}</p>
                    </div>
                    <div className="going-wrapper flex">
                        <span>
                            {jam.usersGoing.length} People Are Going
                        </span>
                        <span className={slotsLeft < 10 ? 'red' : 'green'}>
                              {slotsLeft} Slots Left
                        </span>
                    </div>
                </div>
            </div>
        </li></Link> 
    );
}