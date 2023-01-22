import React from 'react'
import styled from 'styled-components';
import { mobile } from "../Responsive";
import { useState } from 'react';
import { login } from '../service/api/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height 92vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url("https://www.recruiter.com//recruiting/wp-content/uploads/2015/02/shopper.jpg") center; 

     background-size: cover;
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

const Wrapper = styled.div`
   width: 20%;
   padding: 20px;
   background-color: white;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    );
   ${mobile({ width: "55%" })}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 25px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 35px;
`;

const Input = styled.input`
    flex: 1;
    width: 60%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 10px;
`;


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    margin-top: 10px;
    &:disabled{
      color: green;
      cursor: not-allowed;
    }
    border-radius: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
 color: red;
`;

const Login = () => {
  const [usernameOrEmail, setusernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(user);
    const credentials = { usernameOrEmail, password };

    //   authService.login(credentials)
    //     .then((res) => {
    //       localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
    //       //return data;
    //       console.log(authService.getUserInfo());
    //       //console.log(res.data);
    //       navigate("/");
    //     }).catch((err) => {
    //       console.log(err.response.status);
    //       navigate("/error");
    //     });
    // 
    login(dispatch, credentials);
    navigate("/sellerOverview");

  }




  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleClick}>
            <span>{message}</span>
            <Input placeholder="usernameOrEmail" onChange={(e) => setusernameOrEmail(e.target.value)} />
            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />

            <Button type='submit' >LOGIN</Button>
            {/* {error && <Error>Something went wrong...</Error>} */}
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>

        </Wrapper>
      </Container>
    </>
  )
}

export default Login;
