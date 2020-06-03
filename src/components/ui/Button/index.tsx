import React from 'react'
import { Link } from 'react-router-dom'

export const Button = (props: ButtonProps) => {
  return (
    <Link to={props.to}>
      <div className='button'>
        <h3>{props.children}</h3>
      </div>
    </Link>
  )
}

export interface ButtonProps {
  to: string,
  children: any,
}
