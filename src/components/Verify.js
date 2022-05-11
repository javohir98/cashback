import React, { useState } from 'react'
import OTPInput, { ResendOTP } from "otp-input-react";
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import axios from 'axios';

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

const VerifyBox = styled.div`
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
 
    .opt-box {
      justify-content: center;
    }

    .input-box {
      font-family: Gilroy;
      width: 67.05px!important;
      height: 67.05px!important;
      border: 1.1175px solid #626262;
      text-align: center;
      box-sizing: border-box;
      border-radius: 8px;
      font-size: 32px;

      &:last-child {
        margin-right: 0!important;
      }
    }
`;

const Title = styled.h1`
    font-weight: 700;
    text-align: center;
    font-size: 18px;
    font-family: sans-serif;
    letter-spacing: .7px;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: .01em;
  color: #1e1e1e;
  text-align: center;
  font-weight: 500;
  margin-bottom: 40px;
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

const Verify = () => {
  const [OTP, setOTP] = useState("");
  const target_number = useSelector(state => state.user.target_number)

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post('https://api.uracashback.uz/security/verify-login', {
      phoneNumber: target_number,
      code: OTP
    }, 
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('User Token', response.data.token)
    })
    .catch(err => {
      console.log(err);
    })
  }

  

  return (
    <Container>
      
      <Wrapper>
      </Wrapper>
      <VerifyBox>
        <Form onSubmit={handleSubmit}>
          <Title>SMS kodini kiriting</Title>
          <SubTitle>Raqamga yuborildi +{target_number}</SubTitle>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number" 
            className='opt-box'
            inputClassName='input-box'
          />
          <ResendOTP maxTime={120} onResendClick={() => console.log("Resend clicked")} />
          <Button>Davom eting</Button>
        </Form>
      </VerifyBox>
    </Container>
  )
}

export default Verify