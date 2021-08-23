import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPlatform, getStars, smallImage } from "utils";
const GameDetail = ({ pathId }) => {
  //Data
  const { game, isLoading } = useSelector((state) => state.detail);
  const {
    name,
    platforms,
    rating,
    background_image: backgroundImage,
    description_raw,
    short_screenshots,
  } = game;
  const history = useHistory();

  document.body.style.overflow = "hidden";

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("card--shadow")) {
      document.body.style.overflow = "scroll";
      history.push("/");
    }
  };
  return (
    <>
      {/* wait until content is ready to render */}

      {!isLoading && (
        <CardShadow onClick={exitDetailHander} className="card card--shadow">
          <Detail layoutId={pathId} className="card__detail">
            <Stats className="card__stats">
              <div className="card__rating">
                <motion.h3 layoutId={`title ${pathId}`}>{name}</motion.h3>
                <p>Rating: {rating}</p>
                {getStars(rating)}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media className="media">
              <motion.img
                layoutId={`image ${pathId.toString()}`}
                src={smallImage(backgroundImage, 1280)}
                alt={backgroundImage}
              />
            </Media>
            <Description className="description">
              <p>{description_raw}</p>
            </Description>
            <Gallery className="gallery">
              {short_screenshots?.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
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
  z-index: 10;
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
  top: 5vh;
  width: 80%;
  border-radius: 0.4rem;
  padding: 2rem min(3.5vw, 5rem);
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
  img {
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
