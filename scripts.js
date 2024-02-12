let POSITION_INDEX = -1;
const POSITIONS = [
  { top: '55%', right: '80%' },
  { top: '15%', right: 'calc(50% - 50px)' },
  { top: '55%', right: '20%' },
];

function runAway() {
  const element = document.getElementById('no');

  POSITION_INDEX = (POSITION_INDEX + 1) % POSITIONS.length;

  element.style.top = POSITIONS[POSITION_INDEX].top;
  element.style.right = POSITIONS[POSITION_INDEX].right;
  element.style.pointerEvents = 'none';

  // Timeout should be equal to button.no transition-duration in ms
  setTimeout(() => {
    element.style.pointerEvents = 'all';
  }, 200);
}

const FALLING_CATS = [
  './img/sushi-cat-1.png',
  './img/sushi-cat-2.png',
  './img/sushi-cat-3.png',
  './img/sushi-cat-4.png',
  './img/sushi-cat-5.png',
  './img/sushi-cat-6.png',
  './img/sushi-cat-1.png',
  './img/sushi-cat-2.png',
  './img/sushi-cat-3.png',
  './img/sushi-cat-4.png',
  './img/sushi-cat-5.png',
  './img/sushi-cat-6.png',
  './img/sushi-cat-1.png',
  './img/sushi-cat-2.png',
  './img/sushi-cat-3.png',
  './img/sushi-cat-4.png',
  './img/sushi-cat-5.png',
  './img/sushi-cat-6.png',
];

const SUCCESS_TEXT = 'УРАААААА!';

function onAccept() {
  const invitationImg = document.getElementById('invitation');
  invitationImg.style.opacity = '0%';

  const yesButton = document.getElementById('yes');
  yesButton.style.display = 'none';

  const noButton = document.getElementById('no');
  noButton.style.display = 'none';

  const elementToShow = document.getElementById('success');
  elementToShow.style.opacity = '100%';

  const textElement = document.getElementById('text');
  textElement.textContent = SUCCESS_TEXT;

  FALLING_CATS.forEach((fallingCat) => {
    const fallingCatElement = document.createElement('div');
    fallingCatElement.className = 'falling-cat';
    fallingCatElement.style.backgroundImage = `url('${fallingCat}')`;

    const left = Math.floor(Math.random() * 90) + 5;
    fallingCatElement.style.left = `${left}%`;

    const delay = Math.floor(Math.random() * 5000);
    fallingCatElement.style.animationDelay = `${delay}ms`;

    document.body.appendChild(fallingCatElement);
  });
}
