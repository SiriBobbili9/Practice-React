import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
  return (
    <div>
    <h3>OOps Something went Wrong</h3>
    <h4>{err.statustext}</h4>
    </div>
  )
}

export default Error