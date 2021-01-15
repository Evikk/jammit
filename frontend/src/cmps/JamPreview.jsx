import { useHistory } from "react-router-dom";
import jamThumb from "../assets/img/jam-thumb.jpg"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import Bass from '../assets/img/inst-icons/Bass.svg'


export function JamPreview({ jam, onJamClick }) {
    const history = useHistory()
    return (
        <li className="jam-card flex" onClick={()=>onJamClick(jam._id)}>
            <div className="thumb flex column">
                <img className="jam-card thumb" src={jamThumb} className="jamThumb" alt="jam-thumbnail"/>
                <img className="jam-inst" src={Bass} alt=""/>
            </div>
            <div className="jam-card-content flex column" >
                <h2>{jam.title}</h2>
            
            <ul className="jam-card-tags flex">{jam.tags.map((tag, idx) => {
                return <li key={idx}>{tag}</li> })}
            </ul>
            
                <p><LocationOnIcon/>{jam.location.city}</p>
                <p><EventIcon/>{new Date(jam.startsAt).toLocaleString('he-IL',{month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'})}</p>
                <p>8/10 Slots Free</p>
            </div>
        </li>
    );
}