import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { popularProducts } from "../data";
import Product from './Product';
import axios from "axios";
import * as ProductApi from '../service/api/ProductRequest';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const getProduct = async () => {
      const res = await ProductApi.getAllProducts();
      setProducts(res.data);

    };

    getProduct();
  }, [products])

  console.log(products);

  return (
    <Container>
    

      {products
        .map((item) => <Product item={item} key={item.id} />).slice(0,8)}

    
    </Container>
  )
}

export default Products;
