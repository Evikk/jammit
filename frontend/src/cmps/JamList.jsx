import { JamPreview } from "./JamPreview.jsx";

export function JamList({ jams }) {
    return (
        <ul className="jams-list">
            {jams.map((jam) => (
                <JamPreview key={jam._id} jam={jam} />
            ))}
        </ul>
    );
}