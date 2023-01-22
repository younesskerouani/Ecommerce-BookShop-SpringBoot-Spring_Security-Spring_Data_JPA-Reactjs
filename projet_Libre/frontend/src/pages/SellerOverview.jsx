import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Sidebar from '../components/sellerpannel/sidebar/Sidebar'
import HomeSeller from './HomeOverview/HomeSeller';
import SellerproductList from './SellerproductList/SellerproductList';


const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

const SellerOverview = () => {
  return (
    <div>
    <Navbar/>
    <Container> 
    <Sidebar/>
    <HomeSeller/>
    </Container>
    </div>
   
  )
}

export default SellerOverview
