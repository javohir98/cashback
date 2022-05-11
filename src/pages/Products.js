import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://api.uracashback.uz/companies/${id}/products`)
            .then((response) => {
                setProducts(response.data.items)
                console.log(response.data.items);
            })
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        Products
    </div>
  )
}

export default Products