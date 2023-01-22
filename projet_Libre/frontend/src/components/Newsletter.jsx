import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../Responsive";

const Container = styled.div`
    height: 60vh;
    background-color: #696969;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: white;
    ${mobile({fontSize: "45px"})}
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    color: white;
    ${mobile({textAlign: "center", width: "80%"})}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    ${mobile({ width: "80%" })}
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: black;
    color: white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite Books.</Description>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
