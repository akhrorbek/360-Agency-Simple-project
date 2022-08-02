import React from 'react';
import "./Header.css";
import Logo from '../../assets/Images/Logo.svg';

const index = () => {
    return (
        <>
            <div className='haeder'>
                <div className='container pt-3'>
                    <a className='header__logoLink' href="./index.html">
                        <img className='logoLink__logo' src={Logo} alt="Site Logo" width="175" height="44"/>
                    </a>
                    <nav className='header__navbar'>
                        <ul className='navbar__list'>
                            <li className='list__item'>
                                <a href=""></a>
                            </li>
                            <li className='list__item'>
                                <a href=""></a>
                            </li>
                            <li className='list__item'>
                                <a href=""></a>
                            </li>
                            <li className='list__item'>
                                <a href=""></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default index;