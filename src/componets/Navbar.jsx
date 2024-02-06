import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MyImage, MyLink } from "../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const titles = [
    { label: 'Inicio', route: "/" },
    { label: 'Contacto', route: "/contact" }
]

function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <Container>
            <Header>
                <Logo>
                    <MyLink href="/">
                        <MyImage src="./Logos/Imagotipo_main.png" alt="Imagotipo" />
                        <MyImage src="./Logos/BannerLookBuy_dev.png" alt="Imagotipo" />
                    </MyLink>
                </Logo>

                <Menu >
                <FontAwesomeIcon icon={faBars}
                    className="burguerBotton"
                        onClick={handleClick}
                        color="var(--primary-main)"/>
                    <div className={clicked ? "background open" : "background"} />
                    <Pages className={clicked ? "menu open" : "menu"}>
                        <LogoNav>
                            <MyImage src="./Logos/Imagotipo_main.png" alt="Imagotipo" />
                        </LogoNav>
                        {titles.map((t) => (
                            <NavLink to={t.route} key={t.label} className={({ isActive }) =>
                                isActive ? "itemSelected" : "generalText"
                            }>
                                <Item >
                                    {t.label}
                                </Item>
                            </NavLink>
                        ))}
                    </Pages>
                    <FontAwesomeIcon icon={faXmark}
                        className={clicked ? "xBotton open" : "xBotton"}
                        onClick={handleClick}
                        color="var(--primary-main)" />
                </Menu>
            </Header>
        </Container >
    );
}

export { Navbar };

export const Container = styled.div` 
    display: flex;
    height: 60px;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
    background: var(--secondary-main);
    color: var(--white);
    box-shadow: 0px 4px 10px 0px var(--black);
`;

export const Header = styled.div`
    display: flex;
    padding: 10px 120px;
    width: 100%;   
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 1024px) {
        padding: 10px 60px;
    }

    @media screen and (max-width: 768px) {
        padding: 10px 20px;
    }

    @media screen and (max-width: 600px) {
        gap: 10px;
    }
`;

export const Logo = styled.div`
    display: flex;
    height: 100%;
    width: 90%;
`;

export const LogoNav = styled.div`
    display: flex;
    margin: 0 50px 0 5px;
    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

export const Menu = styled.div`
    display: flex;

    
    @media screen and (max-width: 600px) {
        gap: 10px;
    }
    
    .background{
        display: none;
    }
    .background.open{
        @media screen and (max-width: 768px) {
            display: flex;
            position: absolute;
            left: 0px;
            top: 0px;
            background-color: rgba(0, 23, 36, 0.75);
            height: 100vh;
            width: 100vw;
            z-index: 100;
        }
    }
    
    .menu{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30px;
        @media screen and (max-width: 1024px) {
            gap: 10px;
        }
        @media screen and (max-width: 768px) {
            display: none;
            position: absolute;
            flex-direction: column;
            right: 0px;
            top: 0px;
            background-color: var(--secondary-main);
            width: 300px;
            height: 100vh;
            justify-content: flex-start;
            color: var(--primary-main);
            z-index:100;
        }
    }
    
    .menu.open{
        display: flex;
    }
    
    .burguerBotton{
        display: none;

        @media screen and (max-width: 768px) {
            display: flex;
            position: absolute;
            right: 10px;
            top: 10px;
            height: 40px;
            width: 30px;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
        }
    }
  
    .xBotton {
        display: none;
    }
    .xBotton.open {
        @media screen and (max-width: 768px) {
            display: flex;
            position: absolute;
            right: 10px;
            top: 10px;
            height: 40px;
            width: 30px;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
            z-index: 100;
        }
    }
    
`;

export const Pages = styled.div`

    .itemSelected {
        color: var(--primary-main);
        border-bottom: 1px solid var(--secondary-main);
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        
        @media screen and (max-width: 768px) {
            border-bottom: none;
            font-size: 17px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }
`;

export const Item = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    width: 80px;   
    text-align: center;

    &:hover{
    color: var(--primary-main);
    }

    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 768px) {
    }

    @media screen and (max-width: 600px) {
    }
`;

