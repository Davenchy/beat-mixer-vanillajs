window.addEventListener('load', () => {

  const pads = document.querySelectorAll('.pads > div');
  const sounds = document.querySelectorAll('.pads audio');

  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      const audio = sounds[index];
      audio.currentTime = 0;
      audio.play();
    });
  });

});
