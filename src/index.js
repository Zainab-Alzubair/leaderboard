import './style.css';
import fetchData from './modules/getData.js';
import postData from './modules/postData.js';

const refresh = document.querySelector('.refresh-btn');
const form = document.getElementById('form');
const userInput = document.getElementById('user');
const scoreInput = document.getElementById('score');

// submit form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData();
  userInput.value = '';
  scoreInput.value = '';
});

// refresh DOM
refresh.addEventListener('click', () => {
  fetchData()
    .then((data) => {
      let result = '';
      data.result.forEach((elem) => {
        result += `<div class="table-row">${elem.user} | ${elem.score}</div>`;
      });
      document.querySelector('.table').innerHTML = result;
    });
});
