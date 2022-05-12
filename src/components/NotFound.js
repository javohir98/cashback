import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = ({to}) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(to)
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default NotFound