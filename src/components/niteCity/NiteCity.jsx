import React from 'react';
import "./nite_city.css";
import Building from '../../assets/building.jpg';
import Motorbike from '../../assets/motorbike.jpg';
import City from '../../assets/city.jpg';

export default function NiteCity() {
    return (
        <div className='container nite_city__container'>
            <h1 className="nite_city__h1">Найт-Сити изменит тебя навсегда!</h1>

            <div className="nite_city__p">
                <p><span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити,
                    где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства,
                    позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего
                    персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
            </div>

            <div className="nite_city__photos">
                <div className="nite_city__img">
                    <div className="nite_city__building">
                        <img src={Building} alt="city" />
                    </div>

                    <div className="nite_city__motorbike">
                        <img src={Motorbike} alt="motorbike" />
                    </div>
                </div>

                <div className="nite_city__city">
                    <img src={City} alt="city" />
                </div>
            </div>
        </div >
    )
}
