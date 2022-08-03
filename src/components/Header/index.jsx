import React from 'react';
import "./Header.css";
import Logo from '../../assets/Images/Logo.svg';

const index = () => {
    return (
        <>

            <div className='haeder'>
                <div className='header__wrapper container pt-3'>
                    <a className='header__logoLink' href="./index.html">
                        <img className='logoLink__logo' src={Logo} alt="Site Logo" width="175" height="44"/>
                    </a>
                    <nav className='header__navbar'>
                        <ul className='navbar__list'>
                            <li className='list__item'>
                                <a className='item__link' href="#">Ana Sayfa</a>
                            </li>
                            <li className='list__item'>
                                <a className='item__link' href="#">Kurumsal</a>
                            </li>
                            <li className='list__item'>
                                <a className='item__link' href="#">Neler Yapıyoruz?</a>
                            </li>
                            <li className='list__item'>
                                <a className='item__link' href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__btn d-flex align-items-center'>
                        <select className='lang mx-3' name="langSelect">
                            <option value="english">EN</option>
                            <option value="uzbek">UZ</option>
                        </select>
                        <button className='header__button btn btn-primary rounded-5'>Müşteri Girişi</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;