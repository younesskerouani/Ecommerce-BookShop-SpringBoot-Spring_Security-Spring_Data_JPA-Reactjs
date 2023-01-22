import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Info = styled.div`
opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease;
  cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    backgroun-color: #F5F5DC;
    position: relative;

    &:hover ${Info}{
      opacity: 1;
    }
`;

const Circle = styled.div`
  width: 200px;
  height:200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  `;

const Image = styled.img`
  height 75%;
  width: 280px;
  z-index: 2;
`;


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    transition: all 0.5s ease ;
    &:hover{
      background-color: #7FFFD4;
      transform: scale(1.5);
    };
`;

const Product = ({ item }) => {

  //console.log(item.id);

  return (
    <Container>
      <Circle />
      <Image src={`http://localhost:8080/ProductImage/getImage/+ ${item.id}`} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item.id}`}>
            <SearchOutlined />
          </Link>

        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product;
