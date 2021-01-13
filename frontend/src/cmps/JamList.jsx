import { JamPreview } from "./JamPreview.jsx";
import { Link } from 'react-router-dom'

export function JamList({ jams, onDelete }) {
    return (
        <ul className="jams-list">
            {jams.map((jam) => (
                <JamPreview key={jam._id} jam={jam} onDelete={onDelete} />
            ))}
        </ul>
    );
}