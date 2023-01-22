import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

import Checkout from '../components/Checkout';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



const initialOptions = {
    "client-id": "AXn4Umxm3DL3mFb-jTokHfecyeGgzus5yhutecl5sjZLS1J_zIR85Gl-_nvXX1CKg-W8ValVL09qxqEW",
    currency: "USD",
    intent: "capture",
  };
  
const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type ==="filled" && "none"};
    background-color: ${props => props.type ==="filled" ? "black" : "transparent"};
    color: ${props => props.type ==="filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const TopTextS = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Info = styled.div`
     flex: 3;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
`;

const Product = styled.div`
padding: 2px;
height: 20vh;
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`; 

const Image = styled.img`
  width: 150px
 `;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid black;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({ marginTop: "15px" })}
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "10px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;


const HR = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type ==="total" && "500"};
    font-size: ${props=> props.type ==="total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    const cart = useSelector(state=>state.cart)
  return (
    <Container>
      
        <Navbar/>
        <Announcement/>
         <Wrapper>
            <Title>YOUR BAG</Title>

            <Top>

            <Link  to="/" className="link">
            <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>

            <TopTextS>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTextS>

        
        </Top>
            <Bottom>

                <Info>
                    {cart.products.map(product=>(
                        <>
                    <Product>
                        <ProductDetail>
                            <Image src={"http://localhost:8080/ProductImage/getImage/"+product.id}/>
                            <Details>
                                <ProductName><b>Product:</b>{product.productName}</ProductName>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>{product.quantity}</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>{product.price * product.quantity}</ProductPrice>
                        </PriceDetail>
                        
                    </Product>
                    <HR/>
                    </>
                    ))
                    }
                   
                    
                </Info>
                <Summary>
                    
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -2.80</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                  </SummaryItem>

                  <SummaryItem>

                  <PayPalScriptProvider options={initialOptions}>
                     <Checkout amount={cart.total}/>
                 </PayPalScriptProvider>
                 </SummaryItem>

                    
                </Summary>
            </Bottom>
         </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
