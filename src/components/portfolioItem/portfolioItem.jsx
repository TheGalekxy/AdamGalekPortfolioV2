import './portfolioItem.scss';

export default function Welcome(props) {
    return (
        <div className="portfolioItem" id="portfolioItem">
            <h1>Hello, {props.name}</h1>
        </div>
    );
  }

