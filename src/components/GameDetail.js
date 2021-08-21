// Redux
import { loadDetail } from "actions/detailAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// Styling and motion
import { motion } from "framer-motion";
import styled from "styled-components";

const GameDetail = () => {
  // Data
  const { screen, game } = useSelector((state) => state.state);

  return (
    <div className="card card--shadow">
      <div className="card__detail">
        <div className="card__stats">
          <div className="card__rating">
            <h3 className="card__title">{game.name}</h3>
            <p className="card__rating">Rating: {game.rating}</p>
          </div>
        </div>
        <div className="card__info">
          <h3 className="card__title">Platforms</h3>
          <div className="card__platforms">
            {game.plateforms.map((data) => {
              <h3 key={data.platform.key}>{data.platform.name}</h3>;
            })}
          </div>
        </div>
      </div>
      <div className="media">
        <img src={game.background_image} alt="game_image" />
      </div>
      <div className="gallery">
        {screen.results.map((screen) => {
          <img src={screen.image} key={screen.id} alt="gallery_image" />;
        })}
      </div>
    </div>
  );
};

export default GameDetail;
