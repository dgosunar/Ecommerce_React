import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const titles = [
    { label: 'Inicio', route: "/Look_Buy/" },
    { label: 'MyOrders', route: "/Look_Buy/MyOrders" },
    { label: 'SignIn', route: "/Look_Buy/SignIn" },
    { label: 'LogIn', route: "/Look_Buy/LogIn" },
    { label: 'Contacto', route: "/Look_Buy/Contact" },
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
                    <a href="/Look_Buy/">
                        <img src="./Logos/Imagotipo_light.png" alt="Imagotipo" />
                        <img src="./Logos/BannerLookBuy_dev.png" alt="Imagotipo" />
                    </a>
                </Logo>
                <Menu >
                    <FontAwesomeIcon icon={faBars}
                        className="burguerBotton"
                        onClick={handleClick}
                        color="var(--secondary-main)" />
                    <div className={clicked ? "background open" : "background"} />
                    <Pages className={clicked ? "menu open" : "menu"}>
                        <LogoNav>
                            <img src="./Images/BannerLookBuy.png" alt="Imagotipo" />
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
    height: 50px;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: 1;
    background: var(--primary-main);
    box-shadow: 0px 4px 10px 0px var(--black);
`;

export const Header = styled.div`
    display: flex;
    padding: 10px 170px;
    width: 100%;   
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 1024px) {
        padding: 10px 60px;
    }

    @media screen and (max-width: 768px) {
        padding: 10px 15px;
    }

    @media screen and (max-width: 600px) {
        gap: 10px;
    }
`;

export const Logo = styled.div`
    display: flex;
    height: 100%;
`;

export const LogoNav = styled.div`
    display: flex;
    padding: 10px;
    height: 30px;
    width: calc(100% - 20px);
    justify-content: flex-start;
    @media screen and (min-width: 768px) {
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
        gap: 20px;
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
            right: 5px;
            top: 10px;
            height: 30px;
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
            right: 5px;
            top: 10px;
            height: 30px;
            width: 30px;
            justify-content: center;
            align-items: center;
            margin: 0 10px;
            z-index: 100;
        }
    }
    
`;

export const Pages = styled.div`
    color: var(--white);

    .itemSelected {
        color: var(--secondary-main);
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        
        @media screen and (max-width: 768px) {
            color: var(--primary-main);
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
    text-align: center;

    &:hover{
    color: var(--secondary-main);
    }

    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 768px) {
    }

    @media screen and (max-width: 600px) {
    }
`;

