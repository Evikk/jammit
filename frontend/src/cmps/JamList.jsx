import { JamPreview } from "./JamPreview.jsx";

export function JamList({ jams, onJamClick }) {
    return (
        <ul className="jams-list">
            {jams.map((jam) => (
                <JamPreview key={jam._id} jam={jam} onJamClick={onJamClick}/>
            ))}
        </ul>
    );
}