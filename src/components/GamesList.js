import { motion } from "framer-motion";
import styled from "styled-components";
import Game from "./Game";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const GamesList = ({ popular, newGames, upcoming }) => {
  const allGames = [
    { title: "Upcoming Games", games: popular },
    { title: "Popular Games", games: newGames },
    { title: "New Games", games: upcoming },
  ];
  return (
    <GameListStyled key={uuidv4()}>
      {allGames.map((section) => (
        <div className="section">
          <h2>{section.title}</h2>
          <GamesSectionStyled>
            {section.games.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                image={game.background_image}
                key={uuidv4()}
              />
            ))}
          </GamesSectionStyled>
        </div>
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