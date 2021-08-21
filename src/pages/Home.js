import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Components
import { Game } from "components";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadGames } from "actions/gamesActions";
import GameDetail from "components/GameDetail";
import { useLocation } from "react-router-dom";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get that data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  const location = useLocation();

  /**
   * return the last element of the array with every content after a /
   * @eg /game/58386
   * @return 58386
   */
  const id = location.pathname.split("/")[2];
  console.log(id);
  console.log(location.pathname);
  return (
    // TODO:GameList should be another component
    <GameList>
      {id && <GameDetail />}
      <h2>Upcoming Games</h2>
      {/* TODO: Games should be in GameListcomp */}
      <Games>
        {upcoming.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      {/* TODO: Games should be in GameListcomp */}
      <Games>
        {popular.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
      <h2>New Games</h2>
      {/* TODO: Games should be in GameListcomp */}
      <Games>
        {newGames.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
