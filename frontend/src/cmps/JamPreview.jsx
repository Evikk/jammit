import { useHistory } from "react-router-dom";
export function JamPreview({ jam }) {
    const history = useHistory()
    return (
        <li className="jam-card">
            {/* <img src={jam.img_url} className="jam-img" alt="jam"/> */}
            <div className="jam-card-title" onClick={()=>history.push(`/jam/${jam._id}`)}>
                    <h2>{jam.title}</h2>
            </div>
            <div className="jam-card-badges">
                <ul>{jam.tags.map((tag, idx) => {
                    return <li key={idx}>{tag}</li>
                })}</ul>
                <p>{jam.location.address}</p>
                <p>{new Date(jam.startsAt).toLocaleString()}</p>
            </div>
        </li>
    );
}
