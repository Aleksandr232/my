import React, {Component} from 'react';

export default class Frameworks extends Component{
    render(){
        return(
            <section class="frameworks" id="fra">
        <h2 class="title title_fz16 resume__title circle">Навыки</h2>
        <div class="title title_fz36 resume__subtitle" id="frameworks__sub">Что я использую в работе</div>
        <div class="diviader diviader_resume"><span></span></div>
        <div class="container">
            <div class="frameworks__wrapper" id="frameworks__wrapper">
                <div class="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/ultraviolet/240/000000/html--v2.gif" width="140px"
                        class="frameworks__img"/>
                    <div class="frameworks__name">HTML5</div>
                    <div class="frameworks__subtitle">Именно он создает каркас вашего сайта или приложения.</div>
                </div>
                <div class="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/color/160/000000/css3.png" class="frameworks__img"/>
                    <div class="frameworks__name">CSS3</div>
                    <div class="frameworks__subtitle">Этот язык стилей позволяет мне создавать абсолютно любой внешний
                        вид вашего сайта или приложения.</div>
                </div>
                <div class="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/color/160/000000/javascript--v2.gif" width="140px"
                        class="frameworks__img"/>
                    <div class="frameworks__name">Java Script</div>
                    <div class="frameworks__subtitle">Этот язык программирования позволяет оживить все что угодно:
                        слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое</div>
                </div>
                <div class="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/ios-filled/100/000000/jquery.png" width="140px"
                        class="frameworks__img"/>
                    <div class="frameworks__name">Jquery</div>
                    <div class="frameworks__subtitle">Библиотека Jquery позволит ускорить разработку. Без необходимости
                        интегрировать в проект мы её не будем, но навык работы с ней присутствует</div>
                </div>
                <div class="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/ios/50/000000/react-native--v2.gif" width="140px"
                        class="frameworks__img"/>
                    <div class="frameworks__name">React</div>
                    <div class="frameworks__subtitle">Эта библиотека позволяет создавать web-приложения. Мы можем
                        создать максимально интерактивный продукт именно под ваши цели</div>
                </div>
                <div class="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/color/140/000000/nodejs.png" class="frameworks__img"/>
                    <div class="frameworks__name">Node.js</div>
                    <div class="frameworks__subtitle">Эта платформа позволяет создавать бэкенд для вашего продукта -
                        “мозги”, которые будут выполнять действия, которые пользователь не видит</div>
                </div>
                <div class="frameworks__elem" id="frameworks__elem"><img
                        src="https://img.icons8.com/color/140/000000/bootstrap.png" class="frameworks__img"/>
                    <div class="frameworks__name">Bootstrap</div>
                    <div class="frameworks__subtitle">Bootstrap — свободный набор инструментов для создания сайтов и
                        веб-приложений.</div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}