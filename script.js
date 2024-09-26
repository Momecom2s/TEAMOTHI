const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');

// Quando clica no botão "Sim"
yesButton.addEventListener('click', function() {
  message.classList.remove('hidden');
});

// Quando clica no botão "Não"
noButton.addEventListener('mouseover', function() {
  const randomX = Math.floor(Math.random() * 90);
  const randomY = Math.floor(Math.random() * 90);
  noButton.style.position = 'absolute';
  noButton.style.left = randomX + '%';
  noButton.style.top = randomY + '%';
});
