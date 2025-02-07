import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

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

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}