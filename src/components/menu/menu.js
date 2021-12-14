import React, { Component } from 'react';
import MenuBlock from '../menu__block/menu__block';
import MenuOverlay from '../menu__overlay/menu__overlay';



export default class Menu extends Component{
    render(){
        return(
            <div className='menu'>
                <MenuBlock/>
                <MenuOverlay/>
                
            </div>
        )
    }
}