import React from "react";
import logoUnam from "../../assets/logos/LogoUNAM.png";
import logoFca from "../../assets/logos/LogoFCA_Negro.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
import "../../styles/Navbar.css";
import { IconButton } from "@mui/material";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logoUnam} alt="Logo UNAM" className="imgUnam" />
                <img src={logoFca} alt="Logo FCA" className="imgFca" />
                <h2 className="navbar-title">
                    Facultad de Contaduría <br /> y Administración
                </h2>
            </div>


            <div className="navbar-right">
                <button className="home-btn">
                    <HomeOutlinedIcon/>
                    Inicio
                </button>
                <button className="person-btn">
                    <PersonAddSharpIcon/>
                    Usuarios
                </button>
                <button className="notification-btn">
                    <NotificationsNoneOutlinedIcon/>
                </button>
                <button className="notification-btn">
                    <AccountCircleOutlinedIcon/>
                </button>
            </div>
        </nav>
    );
};


export default NavBar;
