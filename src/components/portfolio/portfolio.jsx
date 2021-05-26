import { React, useState, useEffect} from 'react';
import PortfolioList from '../portfolioList/portfolioList';
import './portfolio.scss';
import todoList from './todoList.png';
import {
    featuredPortfolio,
    webPortfolio,
    designPortfolio, 
    contentPortfolio,
    mobilePortfolio
} from '../../data'

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web application",
            title: "Web Application",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "Css",
            title: "Css",
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
            case "web application":
                setData(webPortfolio);
                break;
            case "Design":
                setData(designPortfolio);
                break;
            case "Css":
                setData(contentPortfolio);
                break;
            case "Asp.Net":
                setData(mobilePortfolio);
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
                        <div className="item">
                            <img src={data.img} alt="" />
                            <h3>{data.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
