import jamThumb from "../assets/img/jam-thumb.jpg"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import {instIcons} from '../assets/img/inst-icons/icons.js'


export function JamPreview({ jam, onJamClick }) {

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
        <li className="jam-card flex column" onClick={()=>onJamClick(jam._id)}>
            <div className="thumb flex column pos-relative">
                <img className="jam-card thumb" src={jamThumb} className="jamThumb" alt="jam-thumbnail"/>
                <div className="inst-icons-wrapper">
                    {showIcons()}
                </div>
            </div>
            <div className="jam-card-content flex column" >
                <h2>{jam.title}</h2>
            
            <ul className="jam-card-tags flex">{jam.tags.map((tag, idx) => {
                return <li key={idx}>{tag}</li> })}
            </ul>
            
                <div><p><LocationOnIcon/>{jam.location.city}</p></div>
                <div className="date-slots">
                    <div className="date">
                        <EventIcon/>
                        {new Date(jam.startsAt).toLocaleString('he-IL',{month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'})}
                    </div>
                    {slotsLeft < 10 ? <span className="red">
                        {slotsLeft} Slots Left
                    </span>: <span className="green">Open</span> }
                </div>
                
            </div>
        </li>
    );
}