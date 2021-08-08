import React from "react";

function GameList() {
  return (
    <GameListStyled>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map(({ id, released, name, background_image }) => (
          <Game
            key={id}
            id={id}
            name={name}
            released={released}
            image={background_image}
          />
        ))}
      </Games>
    </GameListStyled>
  );
}

const GameListStyled = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

export default GameList;
