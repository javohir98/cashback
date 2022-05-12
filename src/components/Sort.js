import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { set_auth } from '../redux/actions/UserActions';

const Container = styled.div`
    max-width: ${props => props.type === 'companies' ? '800px' : '1200px'};
    padding: 18px;
    background-color: #fff;
    border-radius: 10px;
    margin: 30px auto 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        max-width: 95%;
        margin: 30px auto;
    }
`;

const Input = styled.input`
    display: block;
    width: 50%;
    border-radius: 5px;
    border: 1px solid #f3f3f3;
    padding: 10px 15px;

    &:focus {
        outline: 1px solid #159671;
    }
`;

const Logo = styled.div`
    a {
        color: #159671;
        text-decoration: none;
    }
`;

const LogOut = styled.button`
    padding: 7px 15px;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    color: #fff;
    background-color: #159671;
    font-weight: 600;
    cursor: pointer;
`;

const Sort = ({inputValue, inputChange, type}) => {
    const dispatch = useDispatch()

    const logOut = () => {
        localStorage.removeItem('User Token')
        dispatch(set_auth(false))
    }

  return (
    <Container type={type}>
        <Logo>
            <Link to='/'>HOME</Link>
        </Logo>
        {type 
        ? ''
        :
        (
            <Input
                placeholder='Search' 
                type='search'
                value={inputValue}
                onChange={inputChange}
            />
        )}
        <LogOut onClick={logOut}>LogOut</LogOut>
    </Container>
  )
}

export default Sort