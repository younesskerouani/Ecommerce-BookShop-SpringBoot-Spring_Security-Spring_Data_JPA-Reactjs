import React from 'react'
import styled from 'styled-components';
import Sidebar from '../../components/sellerpannel/sidebar/Sidebar';
import Navbar from '../../components/Navbar';
import Product from './Product';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Styleside = styled.div`
    flex:1;
`;

const StyleProd = styled.div`
    flex:3;
`;

const ShowProductSeller = () => {
  return (
    <div>
      <Navbar/>
        <Container>
          <Styleside> <Sidebar/> </Styleside>
          <StyleProd><Product/> </StyleProd>
         
        </Container>
    </div>
  )
}

export default ShowProductSeller
