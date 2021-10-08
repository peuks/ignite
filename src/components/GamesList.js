import { motion } from "framer-motion";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Game from "components/Game";

const GamesList = ({ popular, newGames, upcoming }) => {
  const allGames = [
    { title: "Upcoming Games", games: popular },
    { title: "Popular Games", games: newGames },
    { title: "New Games", games: upcoming },
  ];
  return (
    <GameListStyled>
      {allGames.map((section) => (
        <React.Fragment key={uuidv4()}>
          <h2>{section.title}</h2>
          <GamesSectionStyled>
            {section.games.map((game) => (
              <Game game={game} />
            ))}
          </GamesSectionStyled>
        </React.Fragment>
      ))}
    </GameListStyled>
  );
};

const GamesSectionStyled = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const GameListStyled = styled.div`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

export default GamesList;
