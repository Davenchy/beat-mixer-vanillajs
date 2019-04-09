window.addEventListener('load', () => {

  const effects = document.querySelector('.effects');
  const pads = document.querySelectorAll('.pads > div');
  const sounds = document.querySelectorAll('.pads audio');

  const addEffects = color => {
    const effect = document.createElement('div');
    effect.className = "effect";
    effect.style.background = color;
    effect.addEventListener('animationend', () => effect.remove());
    effects.appendChild(effect);
  };

  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      const audio = sounds[index];
      audio.currentTime = 0;
      audio.play();
      const color = window.getComputedStyle(pad)['background-color'];
      addEffects(color);
    });
  });

});
