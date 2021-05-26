import { React, useEffect, useRef } from 'react';
import './intro.scss';
// import portrait from '../../../public/assets/man.png';

import { init } from 'ityped';

export default function Intro() {

    // useRef is like the dom query selector
    const textRef = useRef()

    useEffect(() => {
        // selecting the span element "textRef.current"
        init(textRef.current, {
            showCursor: true,
            backDelay:1500,
            backSpeed: 60,
            strings: ["Front-End", "To Back-End", "To Deployment"],
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    {/* <img src="assets/man.png" alt="" /> */}
                    <img src="assets/Adam_Galek2.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Adam Galek</h1>
                    <h3>Web Developer <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
