import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../../Components/pageHeaderContent';
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const portfolioData = [
  {
    id: 2,
    name: "Eyes Follow Mouse Cursor",
    image: ImageOne,
    link: "https://aniketn1999.github.io/Eyes-follow-mouse-cursor/",
  },
  {
    id: 3,
    name: "Google Keep Clone",
    link: "https://aniketn1999.github.io/GoogleKeepClone/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Music Player App",
    image: ImageThree,
    link: "https://aniketn1999.github.io/MusicPlayerApp/",
  },
  {
    id: 2,
    name: "Typing Speed Test",
    image: ImageFour,
    link: "https://aniketn1999.github.io/typingTestSite/",
  },
  {
    id: 3,
    name: "Spotify Clone",
    image: ImageFive,
    link: "https://aniketn1999.github.io/spotify-clone-/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Clones",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log(hoveredValue);

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  // const openLink = () => {
  //   window.open( , '_blank');
  // }
  

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <NavLink>
                  <img alt="dummy data" src={item.image} />
                </NavLink>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => {
                       window.open( item.link, '_blank')
                    }}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

