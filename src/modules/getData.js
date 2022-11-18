// FECH ALL SCORES
const fetchData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/');
  const leaderBoard = await response.json();
  return leaderBoard;
};
export default fetchData;