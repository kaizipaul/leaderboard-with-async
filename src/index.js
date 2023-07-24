import { dataPush, dataFetch } from './modules/dataExchange.js';
import './style.css';

const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

// create a function that collects data from the input fields and sends them to the API via POST
const sendData = () => {
  const scoreData = {
    user: nameInput.value,
    score: scoreInput.value,
  };
  dataPush(scoreData);
  nameInput.value = '';
  scoreInput.value = '';
};

// event listener for the submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendData();
});

// render the list from data fetched from the API
const renderList = async () => {
  const data = await dataFetch();
  const scoreList = document.getElementById('list-body');
  const listFragment = document.createDocumentFragment();
  data.result.forEach((data) => {
    const newList = document.createElement('li');
    newList.className = 'list';

    const userIcon = document.createElement('div');
    userIcon.className = 'name-icon';
    userIcon.innerHTML = '<i class="fa-solid fa-user"></i>';
    const namePara = document.createElement('p');
    namePara.textContent = `${data.user}`;
    const scorePara = document.createElement('p');
    scorePara.className = 'score';
    scorePara.textContent = `${data.score}`;

    userIcon.appendChild(namePara);
    newList.appendChild(userIcon);
    newList.appendChild(scorePara);
    listFragment.appendChild(newList);
  });
  scoreList.appendChild(listFragment);
};

// refresh the list after adding data
refreshBtn.addEventListener('click', () => {
  renderList();
  const scoreList = document.getElementById('list-body');
  scoreList.innerHTML = '';
});

// render the list when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  renderList();
});