import { useEffect } from "react";
//Redus
import { loadGames } from "actions/gamesActions";
import { useDispatch } from "react-redux";
// import logo from "./logo.svg";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
