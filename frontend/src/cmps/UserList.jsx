import { UserPreview } from "./UserPreview.jsx";

export function UserList({ users }) {
    return (
        <ul className="users-list">
            {users.map((user) => (
                <UserPreview key={user._id} user={user} />
            ))}
        </ul>
    );
}