import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/sellerpannel/sidebar/Sidebar';
import SellerproductList from './SellerproductList';


const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
const ShowProduct = () => {
  return (
    <div>
        <Navbar/>
        <Container>
         <Sidebar/>
         <SellerproductList/>
        </Container>
    </div>
    
  )
}

export default ShowProduct;
