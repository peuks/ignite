import {
  playstation,
  steam,
  xbox,
  nintendo,
  apple,
  gamepad,
  starEmpty,
  starFull,
} from "img";

/**
 * Media resize
 * @method smallImage
 * @param {String} some string
 * @param {String} some object
 * @return {String} some url
 */

export const smallImage = (imagePath, size) => {
  if (!imagePath) return "https://source.unsplash.com/featured/?{game},{video}";

  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};

//GET PLATFORM IMAGES
export const getPlatform = (platform) => {
  switch (platform) {
    case "PlayStation 4":
      return playstation;
    case "Xbox One":
      return xbox;
    case "PC":
      return steam;
    case "Nintendo Switch":
      return nintendo;
    case "iOS":
      return apple;
    default:
      return gamepad;
  }
};

//Get Stars
export const getStars = (ratingGame) => {
  const stars = [];
  const rating = Math.floor(ratingGame);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt="star" key={i} src={starFull}></img>);
    } else {
      stars.push(<img alt="star" key={i} src={starEmpty}></img>);
    }
  }
  return stars;
};
