import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/sellerpannel/sidebar/Sidebar';
import NewProduct from './NewProduct';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Styleside = styled.div`
    flex:1;
`;

const StyleNewProd = styled.div`
    flex:3;
`;

const ShowAddProduct = () => {
  return (
    <div>
      
        <Navbar/>
        <Container>
          <Styleside> <Sidebar/> </Styleside>
          <StyleNewProd><NewProduct/> </StyleNewProd>
         
        </Container>
    </div>
  )
}

export default ShowAddProduct;
