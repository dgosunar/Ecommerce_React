import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Layout } from '../../componets/Layout'

function Home() {

  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json()).then(data => setItem(data))
  }, [])

  return (
    <Layout>
      <Container>
        <Searcher>
          <input placeholder="Buscar productos, marcas y más... "
            className="buscador generalText" />
        </Searcher>
        <Products>
          {items?.map(product => (
            <ProductCard key={product.id}>
              <div className='photo'>
                <img src={product.images[0].includes("[\"")? 'https://www.sipp-pinturerias.com.ar/img/404.png' : product.images[0]}  alt='Imagen del Producto'/>
              </div>
              <div className='title mediumText'>{product.title}</div>
              <div className='generalText'>{product.category.name}</div>
              <div className='primarySubtitle'>$ {product.price}</div>
            </ProductCard>
          ))}
        </Products>
      </Container>
    </Layout>
  );
}

export default Home;

export const Container = styled.div`    
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 15px;
  @media screen and (max-width: 768px) {
  }
`;

export const Searcher = styled.div`
    display: flex;
    width: 700px;

    .buscador{
      display: flex;
      height: 40px;
      border-radius: 8px;
      padding: 0 10px;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
    }
`;

export const Products = styled.div`
    display: flex;
    gap: 16px 16px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    flex-wrap: wrap;
    overflow: auto;
    scrollbar-width: none;

    @media screen and (max-width: 600px) {
      gap: 10px 10px;
    }
`;

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7.5px;
    padding: 10px;
    width: 228px;
    height: 317.5px;
    // height: 358px;
    border-radius: 8px;
    background: var(--white);
    color: var(--black);
    border: solid 1px var(--gray);

    &:hover{
      box-shadow: 0px 4px 10px 0px var(--black);
    }

    .photo{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
       img{
        border-radius: 8px;
       }
    }
    .title{
      overflow: hidden;
      height: 19px;
    }
    
    @media screen and (max-width: 600px) {
      width: calc(50% - 27px);
      height: 260px;
    }
`;
