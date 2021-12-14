import React, { Component } from 'react';
import Sidepanel from '../sidepanel/sidepanel';
import Menu from '../menu/menu';
import Promo from '../promo/promo';
import About from '../about/about';
import Resume from '../resume/resume';
import Frameworks from '../frameworks/frameworks';
import Meportfolio from '../meportfolio/meportfolio';
import Contacts from '../contacts/contacts';




import './app.css';

export default class App extends Component {
    render(){
        return(
            <div>
                <Sidepanel/>
                <Menu/>
                <Promo/>
                <About/>
                <Resume/>
                <Frameworks/>
                <Meportfolio/>
                <Contacts/>
                
            </div>
        )

    
        
    
            
            
        
    }
  
}
