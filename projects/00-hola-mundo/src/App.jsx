import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

  return (
    <section className='App'>
      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard initialIsFollowing userName="juanmunoz">
        Juan Muñoz
      </TwitterFollowCard>
    </section>
  )
}