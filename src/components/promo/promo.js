import  React, { Component } from 'react';

export default class Promo extends Component{
    render(){
        return(
            <section class="promo" id="promo">
        <div class="hamburger"><span></span> <span class="long"></span> <span></span></div>
        <div class="container">
            <div class="title title_fz16 circle">Меня зовут Александр Мельников</div>
            <h1 class="title title_fz48 promo__title">Я web-разработчик<br/>из города Казани</h1><a
                href="#meportfolio"><button class="btn">Портфолио</button></a> <a class="me" href="#wr">Про меня</a>
        </div>
    </section>
        
        )
    }
        
    
}