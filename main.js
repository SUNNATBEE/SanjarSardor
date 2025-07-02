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

  const state = {
    sfx: true,
    music: false,
  };

  function toggleSetting(type) {
    state[type] = !state[type];

    const btn = document.getElementById(`toggle-${type}`);
    const wrapper = document.getElementById(`${type}-wrapper`);
    const activeColor = "#ff4c4c";
    const inactiveColor = "#883939";

    if (state[type]) {
      btn.textContent = "✔";
      btn.classList.remove("border-[#883939]");
      btn.classList.add("border-[#ff4c4c]");
      wrapper.classList.remove("text-[#883939]");
      wrapper.classList.add("text-[#ff4c4c]");
    } else {
      btn.textContent = "✖";
      btn.classList.remove("border-[#ff4c4c]");
      btn.classList.add("border-[#883939]");
      wrapper.classList.remove("text-[#ff4c4c]");
      wrapper.classList.add("text-[#883939]");
    }
  }


    function animateCountUp(el, duration = 1000) {
    const target = +el.getAttribute('data-target').replace(/,/g, '');
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value.toLocaleString();

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  document.addEventListener('DOMContentLoaded', () => {
    animateCountUp(document.getElementById('level'), 2000);
    animateCountUp(document.getElementById('coins'), 2000);
  });