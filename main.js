  // Like useEffect on mount
    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('welcomeMessage').classList.remove('hidden');
    });

    function closeWelcome() {
      document.getElementById('welcomeMessage').classList.add('hidden');
      document.getElementById('mainContent').classList.remove('hidden');
    }


   const hoverSound = new Audio('./sounds/hover.wav');
const clickSound = new Audio('./sounds/click.wav');

document.querySelectorAll('button, .btn, .open__for__hire').forEach(el => {
  el.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  el.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

