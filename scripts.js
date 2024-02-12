// Настройки

// Время за которое передвигается кнопка
// Должно быть числом
const TRANSITION_DURATION = 200;

// Позции на экране между которыми двигается кнопка
// Должно быть массивом объектов с полями top и right со значением в виде строки.
const POSITIONS = [
  { top: '55%', right: '80%' },
  { top: '15%', right: 'calc(50% - 50px)' },
  { top: '55%', right: '20%' },
];

// Количество падающих объектов
// Должно быть числом
const FALLING_OBJECTS_COUNT = 15;

// Список изображений для падающих объектов
// Должен быть массивом ссылок на картинки в папке img
const FALLING_OBJECTS = [
  './img/sushi-cat-1.png',
  './img/sushi-cat-2.png',
  './img/sushi-cat-3.png',
  './img/sushi-cat-4.png',
  './img/sushi-cat-5.png',
  './img/sushi-cat-6.png',
];

// Логика

function init() {
  const buttonNo = document.getElementById('no');
  buttonNo.style.transitionProperty = 'top, right';
  buttonNo.style.transitionDuration = `${TRANSITION_DURATION}ms`;
  buttonNo.style.transitionTimingFunction = 'linear';
}

let POSITION_INDEX = -1;

function runAway() {
  const buttonNo = document.getElementById('no');

  POSITION_INDEX = (POSITION_INDEX + 1) % POSITIONS.length;

  buttonNo.style.top = POSITIONS[POSITION_INDEX].top;
  buttonNo.style.right = POSITIONS[POSITION_INDEX].right;
  buttonNo.style.pointerEvents = 'none';

  setTimeout(() => {
    buttonNo.style.pointerEvents = 'all';
  }, TRANSITION_DURATION);
}

function onAccept() {
  const invitationImg = document.getElementById('invitation');
  invitationImg.style.opacity = '0%';

  const yesButton = document.getElementById('yes');
  yesButton.style.display = 'none';

  const noButton = document.getElementById('no');
  noButton.style.display = 'none';

  const elementToShow = document.getElementById('success');
  elementToShow.style.opacity = '100%';

  const initialText = document.getElementById('initialText');
  initialText.style.display = 'none';

  const successText = document.getElementById('successText');
  successText.style.display = 'block';

  if (FALLING_OBJECTS.length > 0) {
    for (let i = 0; i < FALLING_OBJECTS_COUNT; i++) {
      const fallingObject = document.createElement('div');
      fallingObject.className = 'falling-object';

      const objectIndex = i % FALLING_OBJECTS.length;
      fallingObject.style.backgroundImage = `url('${FALLING_OBJECTS[objectIndex]}')`;

      const left = Math.floor(Math.random() * 90) + 5;
      fallingObject.style.left = `${left}%`;

      const delay = Math.floor(Math.random() * 5000);
      fallingObject.style.animationDelay = `${delay}ms`;

      document.body.appendChild(fallingObject);
    }
  }
}
