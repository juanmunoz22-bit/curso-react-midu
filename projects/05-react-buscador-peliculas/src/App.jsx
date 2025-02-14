import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ query, sort })

  const debouncedGetMovies = useCallback(
    debounce(query => {
      console.log('Debounced', query);
      getMovies({ query })
    }, 500)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    // const { query } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )  --->>> Forma de obtener el valor del input sin usar el estado
    // query (descontrolado) ideal en situaciones donde no se necesita el valor del input en el estado
    getMovies({ query })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setQuery(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            name='query' value={query} placeholder='Avengers, Star Wars...'
            onChange={handleChange}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading
            ? <p>Cargando...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
