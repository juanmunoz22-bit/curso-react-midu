import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    IsFollowing: true
  },
  {
    userName: 'juanmunoz',
    name: 'Juan Muñoz',
    IsFollowing: true
  },
  {
    userName: 'davidbonilla',
    name: 'David Bonilla'
  },
  {
    userName: 'josemadan',
    name: 'Jose Madan'
  },
  {
    userName: 'pabloalbaladejo',
    name: 'Pablo Albaladejo'
  }
]

export function App() {

  return (
    <section className='App'>
      {
        users.map(({ userName, name, IsFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={IsFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
        )
      }
    </section>
  )
}