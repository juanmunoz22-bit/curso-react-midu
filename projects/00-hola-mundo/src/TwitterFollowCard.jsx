import { useState } from "react"

export function TwitterFollowCard({ userName = 'unknown', children, initialIsFollowing = false }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          src={`https://unavatar.io/${userName}`}
          alt="Avatar de usuario"
          className='tw-followCard-avatar' />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}