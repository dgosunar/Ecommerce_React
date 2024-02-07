import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Styles ===============================
const container = 'flex flex-row absolute top-0 z-10 w-full h-[50px] bg-prim-200 shadow-bs';
const header = 'flex flex-row px-[170px] py-[10px] w-full justify-between items-center max-xl:px-[60px] max-xl:py-[10px] max-lg:px-[15px] max-lg:py-[10px] max-sm:g-[10]';
const logo = 'flex h-full';
const nav = 'flex sm:gap-[10px]';
const burguerBotton = 'max-lg:flex absolute right-[5px] top-[10px] h-[30px] w-[30px] justify-center items-center mx-[10px] hidden text-sec-200';
const xBotton = 'hidden max-lg:flex justify-center items-center absolute top-[5px] right-[5px] h-[40px] mx-[10px] z-30';
const myBg = 'hidden max-lg:flex absolute left-0 top-0 h-screen w-screen z-20 bg-prim-200 bg-opacity-75';
const menu = 'flex flex-row justify-center items-center gap-[20px] text-white max-lg:hidden';
const respMenu = 'hidden max-lg:flex flex-col justify-start absolute right-0 top-0 z-30 w-[300px] h-screen bg-sec-200 text-prim-200';
const logoRespMenu = 'hidden justify-start py-[10px] px-[15px] h-[50px] w-full mb-[50px] max-lg:flex';
const item = 'flex justify-center items-center p-[10px] cursor-pointer text-center lg:hover:text-sec-200';
const itemSelected = 'text-sec-200 generalTextB max-lg:text-prim-200';
// ======================================

const titles = [
    { label: 'Inicio', route: "/Look_Buy/" },
    { label: 'MyOrders', route: "/Look_Buy/MyOrders" },
    { label: 'SignIn', route: "/Look_Buy/SignIn" },
    { label: 'LogIn', route: "/Look_Buy/LogIn" },
    { label: 'Contacto', route: "/Look_Buy/Contact" },
]

function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => { setClicked(!clicked) };

    return (
        <div className={container}>
            <div className={header}>
                <div className={logo}>
                    <a href="/Look_Buy/" className="flex">
                        <img src="./Logos/Imagotipo_light.png" alt="Imagotipo" />
                        <img src="./Logos/BannerLookBuy_dev.png" alt="Imagotipo" />
                    </a>
                </div>
                <div className={nav} >
                    <FontAwesomeIcon icon={faBars}
                        className={burguerBotton}
                        onClick={handleClick}
                    />
                    <div className={clicked ? myBg : "hidden"} />
                    <div className={clicked ? respMenu : menu}>
                        <div className={logoRespMenu}>
                            <img src="./Images/BannerLookBuy.png" alt="Imagotipo" />
                        </div>
                        {titles.map((t) => (
                            <NavLink to={t.route} key={t.label} className={({ isActive }) =>
                                isActive ? itemSelected : "generalText"
                            }>
                                <div className={item}>
                                    {t.label}
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    <FontAwesomeIcon icon={faXmark}
                        className={clicked ? xBotton : "hidden"}
                        onClick={handleClick}
                        color="var(--primary-main)" />
                </div>
            </div>
        </div >
    );
};

export { Navbar };

