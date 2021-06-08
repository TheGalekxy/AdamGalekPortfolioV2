import {React, useState} from 'react';
import './experience.scss';

export default function Experience() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
          id: "1",
          icon: "./assets/icons8-youtube-48.png",
          title: "Galekxy Media",
          desc:
            "Galekxy Media is a YouTube channel created to explore my interests in web development, technology, and to help other programmers learn beginniner web development content. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          link: "https://www.youtube.com/channel/UCvkAweO7HT1d0gUBLX_13Ag",
        },
        {
          id: "2",
          icon: "./assets/icons8-linkedin-48.png",
          title: "LinkedIn",
          desc:
            "Connect with me on LinkedIn",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
          link: "https://www.linkedin.com/in/adamgalek/",
        },
        {
          id: "3",
          icon: "./assets/icons8-github-48.png",
          title: "GitHub",
          desc:
            "Take a deeper look at my work!",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
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
