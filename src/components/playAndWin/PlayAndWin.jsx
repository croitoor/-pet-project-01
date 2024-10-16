import React from 'react';
import "./play_and_win.css";

//photo
import LineBlack from '../../assets/line_black.png';
import Action from '../../assets/action.png';
import LineYellow from '../../assets/line_yellow.png';
import XBox from '../../assets/x_box.png';
import LineBlue from '../../assets/line_blue.png';
import Playstation from '../../assets/playstation.png';
import LineBlackYellow from '../../assets/line_black_yellow.png';

/* import emailjs from 'emailjs-com'; */

export default function PlayAndWin() {
    /* const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wihwx6f', 'template_g4tej59', form.current, 'zgh8Fi-u3RPPTm2ZN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }; */

    return (
        <div className='background_in_the_background'>
            <div className="play_and_win__line_black">
                <img src={LineBlack} alt="LineBlack" />
            </div>

            <div className='container play_and_win__container'>
                <div className="play_and_win__action">
                    <img src={Action} alt="Action" />
                    <h1 className='play_and_win__h1'>Играй и выигрывай!</h1>
                </div>

                <div className="play_and_win__p">
                    <p>Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль <span>Xbox Series X</span> или <span>Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
                </div>

                <div className='play_and_win__box'>
                    <form className='form'/* ref={form} onSubmit={sendEmail} */>
                        <input className='form__text' type="text" name='name' placeholder='Как тебя зовут?' required />
                        <input className='form__email' type="email" name='email' placeholder='Твой е-mail' required />

                        <div className='input__wrapper'>
                            <input className='input__file' name="file" type="file" accept="png/*,.jpg/*,.pdf" id="input__file" multiple></input>

                            <label className='input__file-button' for="input__file">
                                <span>Прикрепить скриншот</span>
                                <p className='form__p'>.png / .jpg / .pdf</p>
                            </label>
                        </div>

                        <button
                            className='btn-small btn-primary'
                            type='sunmit'
                        >
                            Отправить
                        </button>

                        <input type="checkbox" id="personal_data" name="personal_data" value="" />
                        <label className='input__file-checkbox' for="personal_data"> Согласен на обработку персональных данных</label>
                    </form>

                    <div className='play_and_win__imgs'>
                        <div className="play_and_win__x_box">
                            <img src={LineYellow} alt="LineYellow" className='x_box__line-yellow' />
                            <img src={XBox} alt="XBox" />
                        </div>

                        <div className="play_and_win__playstation">
                            <img src={LineBlue} alt="LineBlue" className='playstation__line-blue' />
                            <img src={Playstation} alt="Playstation" />
                        </div>
                    </div>
                </div>
            </div >

            <div className="play_and_win__line_black_yellow">
                <img src={LineBlackYellow} alt="LineBlackYellow" />
            </div>
        </div>
    )
}
