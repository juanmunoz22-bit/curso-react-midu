const API_KEY = '27307dbb'

export const searchMovies = async ({ query }) => {
  if (query === '') return []

  try {
    const response = await fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    const json = await response.json()

    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}