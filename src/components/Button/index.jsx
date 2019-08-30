import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, to='', type='primary', ...props }) =>
  (
    <Link className={`btn btn-${type} btn-ghost`} to={to} {...props}>
      {children}
    </Link>
  )

export default Button
