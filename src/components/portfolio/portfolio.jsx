import { React, useState, useEffect} from 'react';
import PortfolioList from '../portfolioList/portfolioList';
import './portfolio.scss';
import todoList from './todoList.png';
import {
    featuredPortfolio,
    FullStackPortfolio,
    ReactPortfolio, 
    PHPPortfolio,
    netPortfolio
} from '../../data'

import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import PortfolioItem from "../portfolioItem/portfolioItem";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "Full-Stack",
            title: "Full-Strack",
        },
        {
            id: "React",
            title: "React",
        },
        {
            id: "PHP",
            title: "PHP",
        },
        {
            id: "Asp.Net",
            title: "Asp.Net",
        }
    ];

    useEffect(() => {

        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "Full-Stack":
                setData(FullStackPortfolio);
                break;
            case "React":
                setData(ReactPortfolio);
                break;
            case "PHP":
                setData(PHPPortfolio);
                break;
            case "Asp.Net":
                setData(netPortfolio);
                break;
            default:
                setData(featuredPortfolio)
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {
                    list.map(item=>(
                        // sending the item.title to the portfolioList component
                        <PortfolioList 
                            title={item.title} 
                            active={selected === item.id}
                            setSelected={setSelected}
                            id = {item.id}
                            />
                    ))
                }
            </ul>
            <div className="container">
                {
                    data.map(data=>(
                        // https://ui.dev/react-router-v5-pass-props-to-link/
                        <Link to={{
                            pathname: `/portfolioItem/${data.id}`,
                            state: {
                                img: `${data.img}`,
                                title: `${data.title}`,
                                description: `${data.description}`
                            }
                            }}>
                                <div className="item">
                                    <img src={data.img} alt="" />
                                    <h3>{data.title}</h3>
                                    {/* <p>{data.description}</p> */}
                                </div>
                            
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
