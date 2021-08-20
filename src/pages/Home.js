import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";

//Styling and Animation
import { loadGames } from "actions/gamesActions";
import GamesList from "components/GamesList";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Get that data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GamesList popular={popular} newGames={newGames} upcoming={upcoming} />
  );
};

export default Home;
