import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { addProduct } from '../service/redx/cartRedux';
import { useDispatch } from 'react-redux';
import PhoneIcon from '@mui/icons-material/Phone';
import "./prod.css"
import * as ProductApi from '../service/api/ProductRequest';

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 90%;
    height: 90vh;
    ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
    flex: 1;
    margin-right: 20px;
    ${mobile({ padding: "15px" })}
`;
const Title = styled.h1`
    font-weight: 300;
    font-size: 54px;
    margin-top: 30px
`;
const Desc = styled.p`
    margin: 20px 0px;
    font-weight: 100;
    font-size: 24px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    margin-top: 30px
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: teal;
    };
`;


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await ProductApi.getProductById(id);
                setProduct(res.data);
            } catch (err) { }
        };
        getProduct()
    }, [id])

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size })
        );
    }

    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <ImgContainer>
                    <Image src={"http://localhost:8080/ProductImage/getImage/" + id} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.productName}</Title>
                    <Desc>{product.productDesc}</Desc>
                    <Price>{product.price} $</Price>


                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")} />

                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <a
                href="https://wa.me/2126094550"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >

                <constwtsp>
                    <PhoneIcon />
                </constwtsp>

            </a>
            <Footer />
        </Container>
    )
}

export default Product
