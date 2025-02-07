import { useState, useEffect } from 'react'
import { getRamdomFact } from '../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRamdomFact().then(newFact => setFact(newFact))
  }

  // recuperar cita al cargar la pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}