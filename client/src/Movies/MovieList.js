import React from 'react'
import { useHistory } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function MovieList(props) {
  const history = useHistory()

  const routeToMovie = (id) => {
    history.push(`/movies/${id}`)
  }

  return (
    <div className='movie-list'>
      {props.movies.map((movie) => (
        <div key={movie.id} onClick={() => routeToMovie(movie.id)}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )
}
