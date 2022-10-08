import React from 'react';
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const userToken = localStorage.getItem('userToken')  
    const userData = userToken == null ? "" : jwt_decode(userToken);
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('userToken')
        closeNavbar()
        navigate('/login')
    }

    const toggleNavbar = () => {
        $(".navbar-collapse").slideToggle()
    }

    const closeNavbar = () => {
        $(".navbar-collapse").slideUp()
    }

    return (
        <header>
        <nav className="navbar navbar-expand-lg position-fixed w-100 py-3">
            <div className="container-fluid">
                <a className="navbar-brand text-white d-flex align-items-center" href="#home">
                    <img src={logo} alt="logo" width="30" height="24"/>
                    <h2 className="fw-bold ms-1">MovieMO</h2>
                </a>

                <button className="navbar-toggler collapsed" type="button" onClick={toggleNavbar}>
                    <div className="toggler-icon"></div>
                    <div className="toggler-icon"></div>
                    <div className="toggler-icon"></div>
                </button>

                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav nav-menu me-auto">
                        <li><NavLink end className="nav-link fw-bold text-gray me-lg-3 me-md-0" to="/" onClick={closeNavbar}>Home</NavLink></li>
                        <li><NavLink className="nav-link fw-bold text-gray me-lg-3 me-md-0" to="/movie" onClick={closeNavbar}>Movies</NavLink></li>
                        <li><NavLink className="nav-link fw-bold text-gray me-lg-3 me-md-0" to="/tv" onClick={closeNavbar}>Tv Shows</NavLink></li>
                        <li><NavLink className="nav-link fw-bold text-gray me-lg-3 me-md-0" to="/people" onClick={closeNavbar}>People</NavLink></li>
                        <li><NavLink className="nav-link fw-bold text-gray me-lg-3 me-md-0" to="/profile" onClick={closeNavbar}>Profile</NavLink></li>
                    </ul>
                    <ul className="navbar-nav nav-icon">
                        <li><NavLink to="/search" className="text-gray" onClick={closeNavbar}><i className="fa-solid fa-magnifying-glass fs-4 pe-lg-4 pe-md-0"></i></NavLink></li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="social-icon fa-brands fa-facebook mx-md-1 text-white fs-5"></i></a>
                            <a href="https://www.linkedin.com/in/osama-atta-438797246" target="_blank" rel="noopener noreferrer"><i className="social-icon fa-brands fa-linkedin mx-md-2 my-lg-0 my-md-4 text-white fs-5"></i></a>
                            <a href="https://github.com/OsamaMohamedAtta" target="_blank" rel="noopener noreferrer"><i className="social-icon fa-brands fa-github mx-md-1 text-white fs-5"></i></a>
                        </li>
                        <li className={`px-lg-4 fw-bold ${(userToken == null) ? 'd-inline-block' : 'd-none'}`}><NavLink to="/login" onClick={closeNavbar}>Login</NavLink></li>
                        <li className={`px-lg-4 fw-bold ${(userToken == null) ? 'd-none' : 'd-inline-block'}`} onClick={logout}><span>{(userToken == null) ? '' : userData.first_name}</span> <i className="arrow fa-solid fa-arrow-right-to-bracket text-gray"></i></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <button className='nn mt-5'>mmmmm</button> */}
    </header>
    );
}

export default Navbar;
