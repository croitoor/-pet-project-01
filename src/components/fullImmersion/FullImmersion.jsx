import React from 'react';
import "./full_immersion.css";

//photo
import Monitor from '../../assets/monitor.png';
import HP from '../../assets/hp.png';
import Logo from "../../assets/logo.png";
import Line from '../../assets/line.png';
import ColorLens from '../../assets/color_lens.png';
import AutoAwesomeMotion from '../../assets/auto_awesome_motion.png';
import AutoAwesome from '../../assets/auto_awesome.png';

export default function FullImmersion() {

    return (
        <div className='full_immersion__background'>
            <div className='container full_immersion__container'>
                <div className='full_immersion__boxes'>
                    <div className='full_immersion__box1'>
                        <div className='full_immersion__monitor'>
                            <img src={Monitor} alt="Monitor" />
                        </div>

                        <div className='full_immersion__imgs'>
                            <div className='full_immersion__hp'>
                                <img src={HP} alt="HP" />
                            </div>

                            <div className='full_immersion__line'>
                                <img src={Line} alt="Line" />
                            </div>

                            <div className='full_immersion__logo'>
                                <img src={Logo} alt="Logo" />
                            </div>
                        </div>
                    </div>

                    <div className='full_immersion__box2'>
                        <h1 className='full_immersion__h1'>Полное погружение вместе с HP</h1>

                        <div className="full_immersion__p">
                            <p>Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!</p>
                        </div>

                        <div className="full_immersion__color_lens">
                            <img src={ColorLens} alt="ColorLens" />
                            <p>Яркие насыщенные цвета</p>
                        </div>

                        <div className="full_immersion__auto">
                            <img src={AutoAwesome} alt="AutoAwesome" />
                            <p>Кристальная четкость изображения</p>
                        </div>

                        <div className="full_immersion__auto-awesome">
                            <img src={AutoAwesomeMotion} alt="AutoAwesomeMotion" />
                            <p>Быстрые движения и плавный геймплей</p>
                        </div>

                        <button
                            className='btn-small btn-details'
                            type='sunmit'
                        >
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
