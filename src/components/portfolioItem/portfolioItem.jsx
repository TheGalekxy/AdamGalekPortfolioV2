import { useLocation, useParams } from 'react-router';
import './portfolioItem.scss';
import '../../data';

export default function PortfolioItem() {

    // https://ui.dev/react-router-v5-pass-props-to-link/
    const { handle } = useParams();
    const location = useLocation();
    const { img, title, description, image1, image2, image3, image4, image5, text1, text2, text3, text4, text5 } = location.state;

    if (image1 === "undefined") {
        return (
            <div className="portfolioItem" id="portfolioItem">
                <div className="container">
                    <h1>{title}</h1>
                    <img src={`${img}`} alt="" />
                    <p>{description}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="portfolioItem" id="portfolioItem">
                <div className="container">
                    <h1>{title}</h1>
                    <img src={`${img}`} alt="" />
                    <p>{description}</p>
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <img src={`${image1}`} alt="{`${image1}`}" />
                    <p>{text3}</p>
                    <img src={`${image2}`} alt="{`${image1}`}" />
                    <p>{text4}</p>
                    <img src={`${image3}`} alt="{`${image1}`}" />
                    <img src={`${image4}`} alt="{`${image1}`}" />
                    <p>{text5}</p>
                    <img src={`${image5}`} alt="{`${image1}`}" />
                </div>
            </div>
        );
    }
  }

