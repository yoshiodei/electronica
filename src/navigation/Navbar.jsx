import React from 'react';
import '../styles/main.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='navbar__brand'>electronica</h1>
            <div className='navbar__button'>
                <div className='navbar__button-icon'></div>
                <div className='navbar__button-icon'></div>
                <div className='navbar__button-icon'></div>
            </div>
            <div className='navbar__navigation-div'>
                <div className='navbar__navigation-button'>Sign In</div>
                <div className='navbar__navigation-button'>Sign Up</div>
                <div className='navbar__navigation-button'>Wish List</div>
                <div className='navbar__navigation-button'>Cart</div>
                <div className='navbar__navigation-button'>Log Out</div>
            </div>
            <div className='navbar__slide-menu'>

            </div>
        </nav>
    );
}

export default Navbar;
