/* eslint-disable jsx-a11y/anchor-is-valid */
 import React from 'react';
 import "./Header.css";
 const Header = () => {
    return (
        // eslint-disable-next-line
        <div>
            <nav className='nav-header'>
                <h3>Logo</h3>
                <div>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </div>
    );
 };
 
 export default Header;