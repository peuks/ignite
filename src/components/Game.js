/**
 * Game.js represent each game card
 */

import { loadDetail } from "actions/detailAction";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Game = ({ released, name, image, id }) => {
  // Load Details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailsHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={image} />
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
