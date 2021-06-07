import { useLocation, useParams } from 'react-router';
import './portfolioItem.scss';

export default function Welcome() {

    // https://ui.dev/react-router-v5-pass-props-to-link/
    const { handle } = useParams();
    const location = useLocation();
    const { img, title } = location.state;

    return (
        <div className="portfolioItem" id="portfolioItem">
            <h1>{title}</h1>
            <img src={`${img}`} alt="" />
        </div>
    );
  }

