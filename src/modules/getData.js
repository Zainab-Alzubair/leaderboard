// FECH ALL SCORES
const fetchData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Vq5ojTK7r1BxGfx6twwS/scores/');
  const leaderBoard = await response.json();
  return leaderBoard;
};
export default fetchData;