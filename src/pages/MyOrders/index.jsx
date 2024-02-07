import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../componets/Layout';

function MyOrders() {

  return (
    <Layout title={"MyOrders"}>
      <Container>
        My Orders
      </Container>
    </Layout>
  );
}

export default MyOrders;

export const Container = styled.div`    
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
  width: 100%;
      
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;