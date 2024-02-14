import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { PiButterflyBold } from "react-icons/pi";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="#">
                        <b>
                            <PiButterflyBold />&nbsp;HELLO TODO
                        </b>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/todo">My ToDo</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="/signin">Sign In</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="#">Log Out</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="#"><img className="img-fluid user-jpg" src="https://cdn-icons-png.flaticon.com/512/714/714043.png" alt="/" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
