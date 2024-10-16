import React from 'react';
import "./buy_the_game.css";

import Disks from '../../assets/disks.jpg';
import Disk from '../../assets/disk.png';
import Wysiwyg from '../../assets/wysiwyg.png';
import Collections from '../../assets/collections.png';
import PC from '../../assets/pc.png';
import XboxOne3Logo from '../../assets/xbox_one_3_logo.png';
import StadiaLogo from '../../assets/stadia_logo.png';
import PlaystationLogo from '../../assets/playstation_logo.png';


export default function BuyTheGame() {
    return (
        <div className='buy_the_game__background'>
            <div className='container buy_the_game__container'>
                <div className='buy_the_game__img'>
                    <img src={Disks} alt="Disks" />
                </div>

                <div className='buy_the_game__box1'>
                    <h1 className='buy_the_game__h1'>Купить игру Cyberpunk 2077</h1>

                    <h2 className='buy_the_game__h2'>В комплект входит:</h2>

                    <div className='buy_the_game__disk'>
                        <img src={Disk} alt="Disk" />
                        <p>Футляр с игровыми дисками</p>
                    </div>

                    <div className='buy_the_game__wysiwyg'>
                        <img src={Wysiwyg} alt="Wysiwyg" />
                        <p>Футляр с кодом для загрузки игры и дисками (pc)</p>
                    </div>

                    <div className='buy_the_game__collections'>
                        <img src={Collections} alt="Collections" />
                        <p>Справочник с информацией об игровом мире</p>
                    </div>
                </div>

                <div className='buy_the_game__box1'>
                    <h2 className='buy_the_game__h2'>Выберите платформу:</h2>

                    <img src={PC} alt="PC" />
                    <img src={XboxOne3Logo} alt="XboxOne3Logo" />
                    <img src={StadiaLogo} alt="StadiaLogo" />
                    <img src={PlaystationLogo} alt="PlaystationLogo" />
                </div>
            </div>
        </div>
    )
}
