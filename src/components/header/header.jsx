import React from 'react';
import './header.scss';
import logo from './AdamGalekLogo.png';
import logo2 from './AdamGalekLogo2.png';
import logo3 from './AdamGalekLogo3.png';
import logo4 from './AdamGalekLogo4.png';
import { Person, Mail} from '@material-ui/icons';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";


export default function header({ headerState, setHeaderState }) {
    return (
        <div className={"header " + (headerState && "active")}>
            <div className="wrapper">
                <div className="left">
                    <Link to="/" className="logo">
                        {/* If the menu is open, display logo3, if not, display logo 2 */}
                        {headerState ? <img src={logo3} alt="" className="logo-image"/>: <img src={logo2} alt="" className="logo-image"/>}
                            
                    </Link>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>Adam Galek</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>Galekxy94@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setHeaderState(!headerState)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
