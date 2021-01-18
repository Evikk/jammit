export function UserTalents({user}) {
    return (
        <div className="user-right-box flex column">
            <div className="top-card">
              <h1>Talents</h1>
            <div className="user-talents">
              <ul className="flex column">{user.talents.map((talent, idx) => {
                return <li key={idx}>{talent}</li>
              })}</ul>
            </div>
            </div>
               <div className="followers bottom-card">
                <h1>Followers</h1>
              {user.followers.map((follower, idx) => {
                return <img className="follower-avatar" src={follower.imgUrl} key={idx} />
              })}
            </div>
        </div>
    )
}