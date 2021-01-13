import { Link } from "react-router-dom";

export function JamPreview({ jam, onDelete }) {
    return (
        <li className="jam-card">
            {/* <img src={jam.img_url} className="jam-img" alt="jam"/> */}
            <button className="delete-btn" onClick={() => onDelete(jam._id)}>
                &times;
            </button>
            <div className="jam-card-title">
                <Link to={`/jam/${jam._id}`}>
                    <span>{jam.title}</span>
                    <h2>Make music</h2>
                </Link>
            </div>
            <div className="jam-card-badges">
                <p>{jam.tags.map((tag, idx) => {
                    return <span key={idx}>{tag}</span>
                })}</p>
                <span>{jam.description}</span>
            </div>
        </li>
    );
}
