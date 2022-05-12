import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { select_company_products } from '../redux/actions/UserActions'

import { TableWrapper, Container, Wrapper } from './companiesStyle';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import Sort from '../components/Sort';
import { useProducts } from '../hooks/useSort';
import { useFetching } from '../hooks/useFetching';
import ProductServiceApi from '../api/ProductServiceApi'

const Products = () => {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const { id } = useParams()
    const dispatch = useDispatch()
    const sortedAndSearchProducts = useProducts(products, filter.sort, filter.query)
    const [limit, setLimit] = useState(25)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const [fetchPosts, isLoading, postError ] = useFetching(async (limit, page, id) => {
      const response = await ProductServiceApi.getAllProducts(limit, page, id)
      setProducts(response.data.items)
      setTotalPage(response.data.total_count)
    })

    useEffect(() => {
      fetchPosts(limit, page, id)
    }, [])

  return (
    <Container>
        <Wrapper />
        <Sort inputValue={filter.query} inputChange={(e) => setFilter({...filter, query: e.target.value})} />
        <TableWrapper name='product'>
            <TableContainer component={Paper} style={{boxShadow: 'none'}}>
                <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Variations name</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading 
                            ?
                            <h3>Laoding...</h3>
                            :
                            sortedAndSearchProducts.map((item, index) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" className='table_item'>
                                    {index + 1}
                                    </TableCell>
                                    <TableCell className='table_item'>{item.name}</TableCell>
                                    <TableCell className='table_item'>{item.description}</TableCell>
                                    <TableCell className='table_item'>
                                        {item.variations.slice(0,1).map((it, index) => <p key={index}>{it.name}</p>)}
                                    </TableCell>
                                    <TableCell className='table_item'>
                                        {item.variations.slice(0,1).map((it, index) => <p key={index}>{it.price}</p>)}
                                    </TableCell>
                                </TableRow>
                            ))
                        
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </TableWrapper>
    </Container>
  )
}

export default Products