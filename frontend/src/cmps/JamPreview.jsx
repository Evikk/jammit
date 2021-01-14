import { useHistory } from "react-router-dom";
import jamThumb from "../assets/img/jam-thumb.jpg"
import LocationOnIcon from '@material-ui/icons/LocationOn';

export function JamPreview({ jam }) {
    const history = useHistory()
    return (
        <li className="jam-card flex">
            <img src={jamThumb} className={jamThumb} alt="jam-thumbnail"/>
            <div className="jam-card-content flex column" onClick={()=>history.push(`/jam/${jam._id}`)}>
                    <h2>{jam.title}</h2>
            
            <ul className="jam-card-tags flex">{jam.tags.map((tag, idx) => {
                return <li key={idx}>{tag}</li> })}
            </ul>
            
                <p>{jam.location.address}</p>
                <p><LocationOnIcon/>{new Date(jam.startsAt).toLocaleString()}</p>
            </div>
        </li>
    );
}