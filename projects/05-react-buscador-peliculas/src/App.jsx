import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import './App.css'

function App() {
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ query })


  const handleSubmit = (event) => {
    event.preventDefault()
    // const { query } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )  --->>> Forma de obtener el valor del input sin usar el estado
    // query (descontrolado) ideal en situaciones donde no se necesita el valor del input en el estado
    getMovies()
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
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
