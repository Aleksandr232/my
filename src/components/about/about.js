import React, {Component} from 'react';
import main_photo from './main_photo.jpg'

export default class About extends Component{
    render(){
        return(
            <section class="about">
        <div class="container">
            <div id="wr" class="about__wrapper"><img src={main_photo} alt="" class="about__photo" id="abp"/>
                <div class="about__descr">
                    <h2 class="title title_fz16 about__title circle">Про меня</h2>
                    <div class="title title_fz36 about__subtitle">Меня зовут Александр</div>
                    <div class="diviader"><span></span></div>
                    <div class="about__text" id="text">
                        <p></p>
                    </div>
                </div>
                <div id="skil" class="about__skills">
                    <div class="about__item">
                        <div><img class="web"
                                src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/29/000000/external-web-coding-online-business-photo3ideastudio-lineal-color-photo3ideastudio.png"/>
                        </div>
                        <div>
                            <div class="title title_fz14">Web-разработка</div>
                            <div class="diviader"><span></span></div>
                            <div id="skiltext" class="about__skills-text">Это процедура создания WEB-приложения или
                                WEB-сайта. Основными этапами этого процесса являются такие мероприятия, как WEB-дизайн,
                                вёрстка страниц сайта, WEB-программирование на стороне сервера и клиента, а также работы
                                по конфигурированию WEB-сервера.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}