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
    background_image: backgroundImage,
    description_raw,
    short_screenshots,
  } = game;

  return (
    <CardShadow className="card card--shadow">
      <Detail className="card__detail">
        <Stats className="card__stats">
          <div className="card__rating">
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
          </div>
          <Info className="info">
            <h3>Platforms</h3>
            <Platforms className="platforms">
              {platforms?.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media className="media">
          <img src={backgroundImage} alt={backgroundImage} />
        </Media>
        <Description className="description">
          <p>{description_raw}</p>
        </Description>
        <Gallery className="gallery">
          {short_screenshots?.map((screen) => (
            <img src={screen.image} key={screen.id} alt={screen.image} />
          ))}
        </Gallery>
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

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  h3 {
    margin-left: 3rem;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
  img {
    padding: 1em 0;
  }
`;
export default GameDetail;
