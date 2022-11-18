const form = document.getElementById('form');

const postData = async () => {
  const payload = new FormData(form);

  const extractPayLoad = [...payload];
  const userValue = extractPayLoad[0][1];
  const scoreValue = extractPayLoad[1][1];

  const payLoadObject = {
    user: userValue,
    score: scoreValue,
  };
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
    method: 'POST',
    body: JSON.stringify(payLoadObject),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
};
export default postData;