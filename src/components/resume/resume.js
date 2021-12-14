import React, {Component} from 'react';


export default class Resume extends Component {
    render(){
        return(
            <section class="resume" id="resume">
        <div class="container" id="container_resume">
            <h2 class="title title_fz16 resume__title circle">Опыт</h2>
            <div class="title title_fz36 resume__subtitle">Чем я буду полезен</div>
            <div class="diviader diviader_resume"><span></span></div>
            <div class="resume__wrapper" id="resume__wrapper">
                <div class="resume__column">
                    <h3 class="title title_fz20 resume__column-title">Образование</h3>
                    <ul>
                        <li>
                            <div class="resume__item">
                                <div class="resume__item-head">
                                    <div class="resume__item-icon"><img
                                            src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/35/000000/external-student-online-learning-itim2101-lineal-color-itim2101-2.png"/>
                                    </div>
                                    <h4 class="title title_fz14">Поволжский ГУФКСиТ</h4>
                                    <div class="resume__item-local">Диплом балквариата | Казань (2017-2021)<br/>Диплом
                                        магистра | Казань (2021-...)</div>
                                </div>
                                <div class="resume__item-body"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="resume__column">
                    <h3 class="title title_fz20 resume__column-title">Курсы</h3>
                    <ul>
                        <li>
                            <div class="resume__item">
                                <div class="resume__item-head">
                                    <div class="resume__item-icon"><img
                                            src="https://img.icons8.com/external-prettycons-flat-prettycons/35/000000/external-web-web-and-seo-prettycons-flat-prettycons.png"/>
                                    </div>
                                    <h4 class="title title_fz14">Udemy</h4>
                                    <div class="resume__item-local"><a href="curs/web.pdf" download>
                                        Web-разработке</a></div>
                                    <div class="resume__item-local"><a href="curs/curs javascript.pdf" download>
                                        Практический Javascript</a></div>
                                </div>
                                <div class="resume__item-body"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        )
    }
}