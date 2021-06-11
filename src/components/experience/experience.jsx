import {React, useState} from 'react';
import './experience.scss';
import Youtube from '../../images/Youtube.PNG';
import LinkedIn from '../../images/Linkedin.PNG';
import Github from '../../images/Github.PNG';

export default function Experience() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
          id: "1",
          icon: "./assets/icons8-youtube-48.png",
          title: "Galekxy Media",
          desc:
            "Galekxy Media is a YouTube channel created to explore my interests in web development, technology, and to help other programmers learn beginniner web development content. ",
          img: Youtube,
          link: "https://www.youtube.com/channel/UCvkAweO7HT1d0gUBLX_13Ag",
        },
        {
          id: "2",
          icon: "./assets/icons8-linkedin-48.png",
          title: "LinkedIn",
          desc:
            "Connect with me on LinkedIn",
          img: LinkedIn,
          link: "https://www.linkedin.com/in/adamgalek/",
        },
        {
          id: "3",
          icon: "./assets/icons8-github-48.png",
          title: "GitHub",
          desc:
            "Take a deeper look at my work!",
          img:Github,
          link: "https://github.com/TheGalekxy", 
        },
      ];

      const handleClick = (way) => {
          // if the current slide is not the first slide (index 0) remove 1 from the current slide index, if it is the first slide go to the last slide
          way === "left" ? setCurrentSlide( currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
      }

    return (
        <div className="experience" id="experience">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                { data.map(item=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h2>
                                    {item.title}
                                </h2>
                                <p> 
                                    {item.desc}
                                </p>
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    {item.title}
                                </a>
                            </div>
                        </div>
                        <div className="right">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                </div>
                ))
                }
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
