import React from 'react';
import { Layout } from '../../componets/Layout'
import { Separator } from "../../componets/Modals/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';

function Contact() {

  return (
    <Layout title={'Contactame'}>
      <Container>
        <Card>
          <MyPresentation>
            <span className="primaryTitle">Daniel Osuna</span>
            <Separator />
            <span className="mediumText">Desarrollador Frontend</span>
            <span className="mediumText">React | Astro | JavaScript</span>
            <span className="mediumText">dgosunar@gmail.com</span>
            <SocialNetworks>
              <a href="https://github.com/dgosunar" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-osuna-r/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </SocialNetworks>
          </MyPresentation>
        </Card>
        <ImagenBox>
          <img src='./Images/Developer activity-bro.png' alt='imagenContacto' />
          <a href='https://storyset.com/work' target='_blank' rel='noopener noreferrer'>Work illustrations by Storyset</a>
        </ImagenBox>
      </Container>
    </Layout>
  );
}

export default Contact;

export const Container = styled.div`    
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1024px) {
    justify-content: space-evenly;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
  }
`;

export const ImagenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;

  @media screen and (max-width: 992px) {
    width: 100%;
    height: 40%;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 400px;
    background-color: var(--white);
    color: var(--black);
    padding: 10px;
    gap: 10px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px 0px var(--black);
        
    @media screen and (max-width: 1024px) {
    }
    
    @media screen and (max-width: 768px) {
    }    
    @media screen and (max-width: 600px) {
        width: calc(100% - 20px);
    }
`;

export const MyPresentation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    
    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 768px) {
    }

    @media screen and (max-width: 600px) {
    }
`;

export const SocialNetworks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 30px;
    width: 100%;

    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 768px) {
    }

    @media screen and (max-width: 600px) {
    }
`;