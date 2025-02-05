import { useState, useEffect } from 'react'
import './App.css'

export default function App() {

  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
  const [fact, setFact] = useState()

  const [imageUrl, setImageUrl] = useState()

  // recuperar cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // recuperar imagen cada vez que tenemos una nueva cita
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white&json=true`)
      .then(response => response.json())
      .then(data => {
        const { _id } = data
        const url = `/cat/${_id}/says/${threeFirstWords}?fontSize=50&fontColor=white`
        setImageUrl(url)
      })
  }, [fact])


  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt="cat" />}
    </main>
  )
}