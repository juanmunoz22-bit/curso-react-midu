/* eslint-disable react/prop-types */

function ListOfMovies({ movies }) {
  console.log('poster', movies[0].image);
  
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResult() {
  return (
    <p>No se encontraron resultados</p>
  )
}

export function Movies({ movies }) {

  const hasMovies = movies?.length > 0
  console.log('movies', movies);
  

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResult />
  )
}