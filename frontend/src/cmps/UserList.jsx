import { UserPreview } from "./UserPreview.jsx";

export function UserList({ users }) {
    return (
        <ul className="user-list">
            {users.map((user) => (
                <UserPreview key={user._id} user={user} />
            ))}
        </ul>
    );
}