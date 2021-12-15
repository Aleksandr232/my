import React, {Component} from 'react';
import main_photo from './main_photo.jpg';


export default class Contacts extends Component{
    render(){
        return(
            <section className="contacts">
        <div className="container">
            <div className="contacts__wrapper" id="contacts__wrapper">
                <div className="contacts__photo"><img src={main_photo} width="400px" height="600px" alt=""
                        className="contacts__photo"/></div>
                <div className="contacts__descr" id="contacts__descr">
                    <h2 className="title title_fz16 about__title circle">Контакты</h2>
                    <div className="title title_fz36 about__subtitle">Свяжитесь со мной</div>
                    <div className="diviader"><span></span></div>
                    <div className="title title_fz14 contacts__text">Любым удобным для вас способом:</div>
                    <div className="contacts__social"><a href="https://telegram.me/aleksmelniks" class="contacts__link"><img
                                src="https://aleksandr232.github.io/rowingtatarstan.io/icons/telegram.gif" height="30px"
                                alt=""/> </a><a href="https://www.instagram.com/melnikrowing1999/?hl=ru"
                            className="contacts__link"><img
                                src="https://img.icons8.com/material-outlined/20/000000/instagram-new--v2.gif"
                                height="30px"/> </a><a href="" className="contacts__link"><img
                                src="https://img.icons8.com/ios-filled/20//facebook--v2.gif" height="30px"/></a>
                        <div className="title title_fz14 contacts__text">Или оставьте ваши данные и я сам вам напишу:</div>
                        <form action="" className="contacts__form" id="contacts__form">
                            <input type="hidden" name="admin_email" value="aleksrowing232@gmail.com"/>
                            <div className="contacts__input"><input name="name" id="name" type="text"/> <label
                                    for="name">Ваше имя</label></div>
                            <div className="contacts__input"><input name="email" id="email" type="email"/> <label
                                    for="email">Ваша почта</label></div>
                            <div className="contacts__textarea"><textarea name="text" id="text"></textarea> <label
                                    for="text">Ваше сообщение</label></div>
                            <div className="contacts__triggers" id="contacts__triggers"><button id="#"
                                    className="contacts__btn">Отправить сообщение</button>
                                <div className="contacts__policy"><input required type="checkbox"/> <span>Я согласен с <a
                                            href="">политикой конфиденциальности</a></span></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}