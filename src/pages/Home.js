import { useEffect } from "react";
//Redus
import { loadGames } from "actions/gamesActions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "components/Game";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
    // console.log("i fire once");
  }, [dispatch]);
  /**
   * Get data back from from store
   * We do have  access to everything from
   * Will return a object with newGames,popular and upcoming.
   * We can extract them by destructuring the response
   */
  const {
    // newGames, popular,
    upcoming,
  } = useSelector((state) => state.games);

  return (
    // Basicaly , it's a container / main
    <GameList>
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
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem clamp(0.1rem, 1vw, 5rem);
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  /*
   *  Reapeat as many time a necessary a column for each item
   *  Each column is 200px minimum and as much space and you
   */
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  /* @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  } */
`;
export default Home;
