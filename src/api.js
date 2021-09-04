// const key = "7df80adea0014ebabf6d0b7ce6e9fbe9"; // YOUR KEY GOES HERE
const key = process.env.REACT_APP_RAWG_API_KEY;

// RAWG_API_KEY
const key_url = `key=${key}`;

//Base URL
const base_url = `https://api.rawg.io/api/`;

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1; // first month is 0

  return month < 10 ? `0${month}` : month;
};

//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?${key_url}`;

//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?${key_url}`;

//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&${key_url}&page_size=9`;
