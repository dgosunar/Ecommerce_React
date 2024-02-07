import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../componets/Layout';

function SignIn() {

  return (
    <Layout title={"SignIn"}>
      <Container>
        Sign In
      </Container>
    </Layout>
  );
}

export default SignIn;

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