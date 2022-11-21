import { Link } from 'react-router-dom'
import React from 'react'

const Error = () => {
  return (
    <div>
      <p>Page not found</p>
      <Link to='/'> back </Link>
    </div>
  )
}

export default Error
