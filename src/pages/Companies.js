import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { add_companies } from '../redux/actions/UserActions'

import { TableWrapper, Container, Wrapper } from './companiesStyle';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Companies = () => {
    const [companies, setCompanies] = useState([])
    const [filter, setFilter] = useState({page: 1, limit: 10, sort: ''})
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://api.uracashback.uz/companies?page=${filter.page}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('User Token')}`
            }
        })
        .then((response) => {
            setCompanies(response.data.items)
            dispatch(add_companies(response.data.items))
            console.log(response.data);
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <Container>
        <Wrapper />
        <TableWrapper>
            <TableContainer component={Paper} style={{boxShadow: 'none'}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Short description</TableCell>
                        <TableCell>Locations</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {companies.map((item, index) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className='table_item'>
                                {index + 1}
                                </TableCell>
                                <TableCell className='table_item'><Link to={`companies/${item.id}/products`}>{item.name}</Link></TableCell>
                                <TableCell className='table_item'>{item.short_description}</TableCell>
                                <TableCell className='table_item'>
                                    {item.locations.slice(0,1).map((it, index) => <p key={index}>{it.name}</p>)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TableWrapper>
    </Container>
  )
}

export default Companies