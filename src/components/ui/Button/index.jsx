import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({ to, children }) => {
  return (
    <Link to={to}>
      <div className='button'>
        <h3>{children}</h3>
      </div>
    </Link>
  )
}
