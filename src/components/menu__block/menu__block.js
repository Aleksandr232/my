import React, { Component } from 'react';
import MenuList from '../menu__list/menu__list';
import MenuClose from '../menu__close/menu__close'; 
import MenuSocial from '../menu__social/menu__social';

export default class MenuBlock extends Component {
    render(){
        return(
            <div className='menu__block'>
                <MenuClose/>
                <MenuList/>
                <MenuSocial/>
            </div>
        )
    }
}