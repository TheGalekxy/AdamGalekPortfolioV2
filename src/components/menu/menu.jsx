import React from 'react';
import "./menu.scss";

export default function menu({ headerState, setHeaderState }) {
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
}
