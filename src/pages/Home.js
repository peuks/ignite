import React, { useEffect } from "react";
//Redux
//Components
//Styling and Animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

//Redux
import { useDispatch, useSelector } from "react-redux";
//Components
import { Game } from "components";

//Styling and Animation
import styled from "styled-components";
import GameDetail from "components/GameDetail";
import { useLocation } from "react-router-dom";
import { loadGames } from "actions/gamesActions";
const Home = () => {
  //get the current location
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get that data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  const allGames = [
    { title: "Upcoming Games", games: popular },
    { title: "Popular Games", games: newGames },
    { title: "New Games", games: upcoming },
  ];
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{id && <GameDetail pathId={id} />}</AnimatePresence>
        {allGames.map((section) => (
          <>
            <h2>{section.title}</h2>
            <Games>
              {section.games.map((game) => (
                <Game game={game} />
              ))}
            </Games>
          </>
        ))}
      </AnimateSharedLayout>
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
