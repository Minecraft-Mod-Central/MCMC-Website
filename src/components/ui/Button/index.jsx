import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({ to, title }) => {
  return (
    <Link to={to}>
      <div className='button'>
        <h3>{title}</h3>
      </div>
    </Link>
  )
}
