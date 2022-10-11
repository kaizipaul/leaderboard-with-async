import './style.css';

const refreshBtn = document.querySelector('.refresh');
const scoreBoard = document.querySelector('.scoreboard');

refreshBtn.addEventListener('click', () => {
  scoreBoard.innerHTML = '';
});
