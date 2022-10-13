import './style.css';
import { dataPush, dataFetch } from './modules/scoreBoard.js';

const refreshBtn = document.querySelector('.refresh');
const submitBtn = document.querySelector('.submit');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const sendData = () => {
  const scoreData = {
    user: nameInput.value,
    score: scoreInput.value,
  };
  dataPush(scoreData);
  nameInput.value = '';
  scoreInput.value = '';
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendData();
});

const renderList = async () => {
  const data = await dataFetch();
  const scoreList = document.getElementById('list-body');
  const listFragment = document.createDocumentFragment();
  data.result.forEach((data) => {
    const newList = document.createElement('li');
    newList.className = 'list';

    const namePara = document.createElement('p');
    namePara.textContent = `Name: ${data.user}`;
    const scorePara = document.createElement('p');
    scorePara.textContent = `Score: ${data.score}`;

    newList.appendChild(namePara);
    newList.appendChild(scorePara);
    listFragment.appendChild(newList);
  });
  scoreList.appendChild(listFragment);
};

refreshBtn.addEventListener('click', () => {
  renderList();
  const scoreList = document.getElementById('list-body');
  scoreList.innerHTML = '';
});

document.addEventListener('DOMContentLoaded', () => {
  renderList();
});