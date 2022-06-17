import React from 'react'
import './style.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  bg-light py-3">
                <div className="container">
                    <a className="navbar-brand h4" href="javascript:void(0)"><button type="button" class="btn btn-outline-success btn-logo"><b>LOGO</b></button></a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="mynavbar">
                        <ul className="navbar-nav me-auto mx-5 ">
                            <li className="nav-item mx-3">
                                <a className="nav-link h6 text-dark" href="javascript:void(0)">HOME</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h6 text-dark" href="javascript:void(0)">ABOUT</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h6 text-dark" href="javascript:void(0)">BECOME CHIEF</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h6 text-dark" href="javascript:void(0)">BECOME DRIVER</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h6 text-dark" href="javascript:void(0)">LOGIN</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link h6 text-dark" href="javascript:void(0)">SIGN UP</a>
                            </li>
                        </ul>
                        <form className="d-flex px-3">
                            <button type="button" className="btn btn-outline-secondary  text-white main-btn"><b>GET APP</b></button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar