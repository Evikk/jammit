import jamThumb from "../assets/img/jam-thumb.jpg"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import Bass from '../assets/img/inst-icons/Bass.svg'


export function JamPreview({ jam, onJamClick }) {
    return (
        <li className="jam-card flex" onClick={()=>onJamClick(jam._id)}>
            <div className="thumb flex column pos-relative">
                <img className="jam-card thumb" src={jamThumb} className="jamThumb" alt="jam-thumbnail"/>
                <img className="jam-inst" src={Bass} alt=""/>
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
                    <p>
                        {jam.capacity - jam.usersGoing.length} Slots Left
                    </p>
                </div>
                
            </div>
        </li>
    );
}