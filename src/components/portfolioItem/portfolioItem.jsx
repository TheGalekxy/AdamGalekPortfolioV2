import { useLocation, useParams } from 'react-router';
import './portfolioItem.scss';
import '../../data';

export default function Welcome() {

    // https://ui.dev/react-router-v5-pass-props-to-link/
    const { handle } = useParams();
    const location = useLocation();
    const { img, title, description } = location.state;

    return (
        <div className="portfolioItem" id="portfolioItem">
            <div className="container">
                <h1>{title}</h1>
                <img src={`${img}`} alt="" />
                <p>{description}</p>
            </div>
        </div>
    );
  }

