export function UserTalents({user}) {
    return (
        <div className="flex column">
              <div className="follow-container">
                <h2>Followers</h2>
                {user.followers.length === 0 ? <p>No followers yet...</p> :
                <ul className="follow-list">
                  {user.followers.slice(0, 3).map((follower, idx) => {
                    return <li key={idx} className="follow-avatar">
                              <img alt="follow-jammers" src={follower.imgUrl}  />
                          </li>
                  })}
                </ul>}
              </div> 
              <div className="follow-container">
                <h2>Following</h2>
                  {user.following.length === 0 ? <p>Not following anyone :)</p> :
                <ul className="follow-list">
                  {user.following.slice(0, 3).map((following, idx) => {
                    return <li key={idx} className="follow-avatar">
                              <img alt="following-jammers" src={following.imgUrl}  />
                          </li>
                  })}
                </ul>}
              </div> 
        </div>
    )
}