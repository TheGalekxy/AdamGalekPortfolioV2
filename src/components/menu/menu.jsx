import React from 'react';
import "./menu.scss";
import {Route, BrowserRouter as Router, Link, useLocation} from "react-router-dom";

export default function Menu({ headerState, setHeaderState }) {
    // https://stackoverflow.com/questions/42253277/react-router-v4-how-to-get-current-route
    const location = useLocation();
    // console.log(location.pathname);
    if (location.pathname === "/"){
        return (
            <div className={"menu " +(headerState && "active")}>
                <ul>
                    
                    {/* could create a component for these li's, something to improve for next version */}
                    <li onClick={()=>setHeaderState(false)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick={()=>setHeaderState(false)}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick={()=>setHeaderState(false)}>
                        <a href="#experience">Experience</a>
                    </li>
                    <li onClick={()=>setHeaderState(false)}>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li onClick={()=>setHeaderState(false)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className={"menu " +(headerState && "active")}>
                <ul>
                    {/* could create a component for these li's, something to improve for next version */}
                    <li onClick={()=>setHeaderState(false)}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    {/* <li onClick={()=>setHeaderState(false)}>
                        <Link to="/#portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li onClick={()=>setHeaderState(false)}>
                        <a href="#experience">Hello</a>
                    </li>
                    <li onClick={()=>setHeaderState(false)}>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li onClick={()=>setHeaderState(false)}>
                        <a href="#contact">Contact</a>
                    </li> */}
                </ul>
            </div>
        )
    }
}
