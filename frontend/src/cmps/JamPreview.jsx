import { iconService } from '../services/iconService.js'
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LazyLoad from 'react-lazyload';

export function JamPreview({ jam }) {

    const slotsLeft = jam.capacity - jam.usersGoing.length
    
    return (
    <li className="jam-card flex column">
            <Link to={`/jam/${jam._id}`}>
            <div className="thumb-wrapper flex column pos-relative">
                <LazyLoad height={200}>
                <img className="jam-thumb"  src={jam.thumbUrl} alt="jam-thumbnail"/>
                </LazyLoad>
                <div className="inst-icons-wrapper">
                    {iconService.displayJamIcons(jam)}
                </div>
            </div>
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