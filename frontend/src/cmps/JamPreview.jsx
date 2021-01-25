// import LocationOnIcon from '@material-ui/icons/LocationOn';
import {instIcons} from '../assets/img/inst-icons/icons.js'
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
export function JamPreview({ jam }) {

    function showIcons (){
        return instIcons.map((icon, idx)=>{
            const user = jam.usersGoing.find(currUser => {
                return currUser.playing.some(inst=>{
                    const instName = Object.keys(icon)[0]
                    return instName === inst
                })
            })
            if (user) return <div key={idx} className="inst-icon">
                <img src={Object.values(icon)[0]} alt="instrument"/>
            </div>
        })
    }
    const slotsLeft = jam.capacity - jam.usersGoing.length
    
    return (
        <li className="jam-card flex column">
            <Link to={`/jam/${jam._id}`}>
            <div className="thumb-wrapper flex column pos-relative">
                <img className="jam-thumb"  src={jam.imgUrl} alt="jam-thumbnail"/>
                <div className="inst-icons-wrapper">
                    {showIcons()}
                </div>
            </div>
            {/* <h2>{jam.title}</h2> */}
            <div className="jam-card-content flex">
                <div className="jam-details-wrapper">
                    <div className="first-row">
                        <h2>{jam.title}</h2>
                        <div className="date">
                            <span>{new Intl.DateTimeFormat('il', { month: 'short' }).format(new Date(jam.startsAt))} {new Date(jam.startsAt).toLocaleString('he-IL',{day: '2-digit'})}</span>
                        </div>
                    </div>
                    <ul className="jam-card-tags flex ">{jam.tags.map((tag, idx) => {
                        return <li key={idx}>{tag}</li> })}
                    </ul>
                    <div className="going-wrapper flex">
                        <div className="align-self">
                            <p className="gray-dark"><LocationOnOutlinedIcon style={{ fontSize: 15 }}/>{jam.location.city}</p>
                        </div>
                        <span className={slotsLeft < 5 ? 'red' : 'green'}>
                                {jam.usersGoing.length}/{jam.capacity} Slots
                        </span>
                    </div>
                </div>
            </div>
        </Link>
        </li> 
    );
}