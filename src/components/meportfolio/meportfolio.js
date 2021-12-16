import React, {Component} from 'react';
import react from './react.jpg';
import myapp from './myapp.png';
import climbers from './climbers.png';
import calc from './calc.png';

export default class Meportfolio extends Component{
    render(){
        return(
            <section className="meportfolio" id="meportfolio">
        <h2 className="title title_fz16 resume__title circle">Портфолио</h2>
        <div className="title title_fz36 resume__subtitle" id="frameworks__sub">Мои работы</div>
        <div className="diviader diviader_resume"><span></span></div>
        <div className="container">
            <div className="work__me" id="work__me">
                <div className="workelem"><a href="https://aleksandr232.github.io/rowingtatarstan.io/"><img
                            src="https://im.kommersant.ru/Issues.photo/LifeStyle_Online/2019/06/27/KMO_120232_20616_1_t218_153158.jpg"
                            width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://aleksandr232.github.io/number.io/"><img src={react}
                            width="248px" height="248px" alt=""/></a></div>
                 <div className="workelem"><a href="https://aleksandr232.github.io/add-employees.io/"><img src={myapp}
                                width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="http://snowkzn.ru/"><img src={climbers}
                                width="248px" height="248px" alt=""/></a></div>
                <div className="workelem"><a href="https://calc-io-gamma.vercel.app/"><img src={calc}
                                width="248px" height="248px" alt=""/></a></div>
            </div>
        </div>
    </section>
        )
    }
}