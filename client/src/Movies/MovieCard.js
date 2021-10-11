import React from 'react'
import { useHistory } from 'react-router-dom'

export default function MovieCard(props) {
  const { id, title, director, metascore, stars = null } = props.movie

  const history = useHistory()

  const routeToMovie = (id) => {
    if (!stars) history.push(`/movies/${id}`)
  }

  return (
    <div className='save-wrapper'>
      <div className='movie-card' onClick={() => routeToMovie(id)}>
        <h2>{title}</h2>
        <div className='movie-director'>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>

        {stars &&
          stars.map((star) => (
            <div key={star} className='movie-star'>
              {star}
            </div>
          ))}
      </div>
      {stars && <div className='save-button'>Save</div>}
    </div>
  )
}
