import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 50vh;
    background-color: #159671;
    top: 0;
    z-index: 1;
`;

const Logo = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    font-size: 32px;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #fff;
    }
`;

const LogIn = styled.div`
    padding: 40px;
    background-color: #fff;
    box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    z-index: 2;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    gap: 16px;
`;

const Title = styled.h1`
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
    font-family: sans-serif;
    letter-spacing: .7px;
`;

const Input = styled.input`
    padding: 12px 17px;
    border-radius: 4px;
    background-color: #fafafa;
    border: none;
`;

const Button = styled.button`
    padding: 15px 0;
    background-color: #159671;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    margin-top: 16px;
`;

const Image = styled.img`
    position: ${(props)=>props.val};
    bottom: ${(props)=>props.bott};
    left: ${(props)=>props.l};
`;

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('')
    let navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const val = Array.from(phoneNumber.toString()).map(Number);

        if(val.length < 12) {
            alert('The phone number must be at least 12 digits');
        } else {
          axios.post('https://api.uracashback.uz/security/send-verification', {
              phoneNumber: `+${phoneNumber}`
          })
            .then((response) => {
                console.log(response);
                navigate('/verify')
                
            })
            .catch((err) => {
                console.log(err);
                alert('error occures')
            })
        }

                

    }

    return (
      <Container>
          <Wrapper>
          </Wrapper>
              <LogIn>
                  <Logo>
                    <Link to='/' >
                      <Image src={''} />
                      <Image src={''} />
                      <Image src={''} />
                      <Image src={''} />
                      <Image src={''} />
                      <Image val='absolute' l='15px' bott='-5px' src={''} />
                      <Image val='absolute' l='50%' bott='-15px' src={''} />
                      <Image val='absolute' l='90%' bott='-17px' src={''} />
                      </Link>
                    </Logo>
                  <Form onSubmit={handleSubmit}>
                      <Title>Tizimga kirish</Title>
                      <Input 
                          placeholder="Phone number" 
                          required 
                          type='number'
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <Button>Kirish</Button>
                  </Form>
              </LogIn>
      </Container>
    )
}

export default Login;