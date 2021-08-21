import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  //Data
  const { game } = useSelector((state) => state.detail);
  const {
    name,
    platforms,
    rating,
    background_image,
    description_raw,
    short_screenshots,
  } = game;

  return (
    <CardShadow className="card card--shadow">
      <Detail className="card__detail">
        <div className="card__stats">
          <div className="card__rating">
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {platforms?.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={background_image} alt={background_image} />
        </div>
        <div className="description">
          <p>{description_raw}</p>
        </div>
        <div className="gallery">
          {short_screenshots?.map((screen) => (
            <img src={screen.image} key={screen.id} alt={screen.image} />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};
const CardShadow = styled(motion.div)`
  /** Will take all the screen */
  width: 100%;
  min-height: 100vh;
  /* when scroll , will stay on the screen */
  overflow-y: scroll;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 5;
  /* Custom scroll barr */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;
export default GameDetail;
