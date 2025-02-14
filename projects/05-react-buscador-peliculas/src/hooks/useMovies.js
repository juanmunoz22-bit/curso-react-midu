import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(query) // useRef guarda el valor de la busqueda anterior para compararla con la actual y no hacer la misma busqueda

  const getMovies = useCallback(async ({ query }) => {  // useCallback se usa para memorizar la funcion y no se vuelva a crear en cada renderizado
    if (query === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = query
      const newMovies = await searchMovies({ query })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => { // useMemo se usa para memorizar el valor de la variable y no se vuelva a crear en cada renderizado
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, loading }
}