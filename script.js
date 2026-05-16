const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const quizButtons = document.querySelectorAll('.quiz-btn');
const quizResult = document.getElementById('quizResult');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

quizButtons.forEach((button) => {
  button.addEventListener('click', () => {
    quizResult.textContent = button.dataset.result;
  });
});
