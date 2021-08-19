/**
 * Game.js represent each game card
 */
// import { motion } from "framer-motion";

import { motion } from "framer-motion";
import styled from "styled-components";

// import styled from "styled-components";
const Game = ({ released, name, image }) => {
  // console.log({ released, name, image });
  return (
    <StyledGame>
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
