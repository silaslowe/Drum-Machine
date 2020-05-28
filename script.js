window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the funtion form running
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

function removeTransition(e) {
  if (e.propertyName !== 'transition') return;
  console.log(propertyName);
}

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  return key.addEventListener('transitionEnd', removeTransition);
});
