import React from 'react';

import './header.scss'

import { logo } from '../../assets/images'

const Header = () => {
    return(
        <div className="header" >
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav">
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Agents</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header