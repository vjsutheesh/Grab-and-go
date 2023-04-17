import { Link } from "react-router-dom";
import Grab from './Grab.png';
// import { useState,useEffect } from "react";
import { MdWhereToVote, MdSearch } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";
const NavBar = () => {
    return (
        <div className="header home" >
            <div className="image-logo">
                <Link to='/' className="logo-link">
                    <img src={Grab} alt="Loading...." />
                </Link>
            </div>
            <div className="header-right">
                <div className="header-location-bar">
                    <div className="location-wrap">
                        <div className="location-icon">
                            <MdWhereToVote className="iconloc absolute-center" />
                            <div>Salem</div>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className="seperator"></div>
                    <div className="search-bar">
                        <MdSearch className="search-icon" />
                        <input type="text" className="search-text" placeholder="Search for a restaurant" />
                    </div>
                </div>
                <div className="profile-wrapper">
                    <div className="cart-bar">
                        <a href="/mycart" className="mycart-icon"><CgShoppingCart/></a>
                        <a href="/mycart" className="mycart-name">My Cart</a>
                    </div>
                    <div className="account-details">
                        <a href="/" className="header-username">Sutheesh</a>
                        <a href="/"><VscAccount className="header-profile-image" /></a>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default NavBar;