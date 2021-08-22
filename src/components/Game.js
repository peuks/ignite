/**
 * Game.js represent each game card
 */

import { loadDetail } from "actions/detailAction";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { smallImage } from "utils";

const Game = ({ game }) => {
  const {
    released,
    name,
    background_image: image,
    id,
    short_screenshots,
  } = game;
  // Load Details handler
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    dispatch(loadDetail(id, short_screenshots));
  };
  return (
    // Will change the URL and because we have a condition on routing. It will show GameDetail Component
    <Link to={`/game/${id}`}>
      <StyledGame onClick={loadDetailsHandler}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={image} />
      </StyledGame>
    </Link>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  -radiusborder: 0.4rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
