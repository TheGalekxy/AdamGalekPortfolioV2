import { useLocation, useParams } from 'react-router';
import './portfolioItem.scss';
import '../../data';

export default function PortfolioItem() {

    // https://ui.dev/react-router-v5-pass-props-to-link/
    const { handle } = useParams();
    const location = useLocation();
    const { img, title, description, live, github, text1, text2, text3, text4, text5, technologies, images, roles } = location.state;

    if (images == '') {
        return (
            <div className="portfolioItem" id="portfolioItem">
                <div className="container">
                    <h1>{title}</h1>
                    <img src={`${img}`} alt="" />
                    <h3>Overview</h3>
                    <p>{description}</p>
                    <h3>Role(s):</h3>
                    <ul>
                        {/* https://stackoverflow.com/questions/47287177/how-to-loop-over-a-number-in-react-inside-jsx */}
                        {
                            [...roles].map(role => {
                                return <li>{role}</li>
                            })
                        }
                    </ul>
                    <h3>Technologies Used:</h3>
                    <ul>
                        {/* https://stackoverflow.com/questions/47287177/how-to-loop-over-a-number-in-react-inside-jsx */}
                        {
                            [...technologies].map(technology => {
                                return <li>{technology}</li>
                            })
                        }
                    </ul>
                    <h3>Take A Deeper Look!</h3>
                    {/* If the github value is truthy, show the github link, otherwise don't show anything */}
                    { 
                    // A little bit confusing here... If the github and live props are truthy, then display the text with the link to the live version AND the github, otherwise do another ternary check to see if the github is truthy, if it is display the
                    // github link only, otherwise, display the live link only.
                    github && live ? <p className="projectLinkParagraph"> If you are interested in taking a closer look at the {title} project you can find the <a href={`${live}`}> Live Site here</a> and you can take a look at the project <a href={`${github}`}> GitHub here</a></p> 
                    : github ? <p className="projectLinkParagraph"> If you are interested in taking a closer look at the {title} project you can take a look at the project <a href={`${github}`}> GitHub here</a></p>
                        : <p className="projectLinkParagraph"> If you are interested in taking a closer look at the {title} project you can find the <a href={`${live}`}> Live Site here</a></p>
                    }
                    
                </div>
            </div>
        );
    } else {
        return (
            <div className="portfolioItem" id="portfolioItem">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <img src={`${img}`} alt="" />
                    <h3>Overview</h3>
                    <p>{description}</p>
                    <h3>Role(s):</h3>
                    <ul>
                        {/* https://stackoverflow.com/questions/47287177/how-to-loop-over-a-number-in-react-inside-jsx */}
                        {
                            [...roles].map(role => {
                                return <li className="role">{role}</li>
                            })
                        }
                    </ul>
                    <h3> Process & Challenges </h3>
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <img src={`${images[0]}`} alt="{`${image1}`}" />
                    <p>{text3}</p>
                    <img src={`${images[1]}`} alt="{`${image1}`}" />
                    <p>{text4}</p>
                    <img src={`${images[2]}`} alt="{`${image1}`}" />
                    <img src={`${images[3]}`} alt="{`${image1}`}" />
                    <p>{text5}</p>
                    <img src={`${images[4]}`} alt="{`${image1}`}" />
                    <h3>Technologies Used:</h3>
                    <ul>
                        {/* https://stackoverflow.com/questions/47287177/how-to-loop-over-a-number-in-react-inside-jsx */}
                        {
                            [...technologies].map(technology => {
                                return <li>{technology}</li>
                            })
                        }
                    </ul>
                    <h3>Take A Deeper Look!</h3>
                    {/* If the github value is truthy, show the github link, otherwise don't show anything */}
                    { 
                    // A little bit confusing here... If the github and live props are truthy, then display the text with the link to the live version AND the github, otherwise do another ternary check to see if the github is truthy, if it is display the
                    // github link only, otherwise, display the live link only.
                    github && live ? <p className="projectLinkParagraph"> If you are interested in taking a closer look at the {title} project you can find the <a href={`${live}`}> Live Site here</a> and you can take a look at the project <a href={`${github}`}> GitHub here</a></p> 
                    : github ? <p className="projectLinkParagraph"> If you are interested in taking a closer look at the {title} project you can take a look at the project <a href={`${github}`}> GitHub here</a></p>
                        : <p className="projectLinkParagraph"> If you are interested in taking a closer look at the {title} project you can find the <a href={`${live}`}> Live Site here</a></p>
                    }
                </div>
            </div>
        );
    }
  }

