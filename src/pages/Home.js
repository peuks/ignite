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
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  console.log(searched);
  const allGames = [
    { title: "Upcoming Games", games: popular },
    { title: "Popular Games", games: newGames },
    { title: "New Games", games: upcoming },
  ];
  const SearchedGames = [{ title: "Searched Games", games: searched }];

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>{id && <GameDetail pathId={id} />}</AnimatePresence>

        {searched.length > 0 &&
          SearchedGames.map((section) => (
            <div className="searched">
              <h2>{section.title}</h2>
              <Games>
                {section.games.map((game) => (
                  <Game game={game} />
                ))}
              </Games>
            </div>
          ))}
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
  padding: 0rem min(3.5vw, 5rem);
  h2 {
    padding: min(2.5vh, 5rem) 0 min(9vh, 5rem) 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(248px, 50vw, 350px), 1fr)
  );
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
