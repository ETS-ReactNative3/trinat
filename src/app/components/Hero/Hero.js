import React from 'react';

import './hero.style.scss';
import logo from '../../../public/assets/images/hero.jpg';
import {useTranslation} from 'react-i18next';
import Menu from "../Menu/Menu";

function Hero() {
    const {t} = useTranslation();

    return <div className="hero" id="hero">
        <div className="caption-title">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h2 className="parallax-item">
                            <p className="title-first">Welcome to</p>
                            <p className="title-caption">{t('trinat.title')}<strong>{t('trinat.type')}</strong></p>
                            <span className="sub-title">{t('hero.title')}</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <Menu/>
        <img src={logo} alt="Home hero wallpaper" className="hero-wallpaper"/>
    </div>
}

export default Hero;
