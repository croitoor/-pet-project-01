import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import HeaderSocials from './HeaderSocials';

export default function Header() {
    return (
        <header>
            <div className='container header__container'>
                <div className="header__container_mini">
                    <a className="logo"
                        href="/"
                    >
                        <img src={Logo} alt="logo" />
                    </a>

                    <HeaderSocials />
                </div>

                <div className="header__advertising">
                    <div className="header__advertising-box">
                        <h2 className="header__advertising-text">Доступно на всех платформах</h2>
                    </div>
                    <a
                        className='btn btn-advertising'
                        href="/"
                    >
                        Узнать больше
                    </a>
                </div>

            </div>
        </header>
    )
}
