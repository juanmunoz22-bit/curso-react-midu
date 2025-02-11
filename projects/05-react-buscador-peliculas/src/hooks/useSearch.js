import { useState, useEffect, useRef } from 'react'

export function useSearch() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }
    if (query === '') {
      setError('Debes ingresar una busqueda')
      return
    }

    if (query.length < 3) {
      setError('Debes ingresar al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return { query, setQuery, error }
}