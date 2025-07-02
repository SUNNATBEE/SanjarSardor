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


  // Coinni 0dan boshledi
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

  // Analizni animationi
        const progressCircle = document.getElementById('progress');
        const progressText = document.getElementById('progressText');
        const total = 22;
        const target = 13;
        const duration = 2000; // 5 soniya
        const circumference = 251.2; // 2 * π * r (r = 40% of 32px radius)
        let startTime;

        function animate(time) {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const currentValue = Math.floor(progress * target);
            const dashOffset = circumference - (progress * (circumference * (target / total)));

            progressCircle.style.strokeDashoffset = dashOffset;
            progressText.textContent = `${currentValue}/${total}`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        // Animatsiyani boshlash
        requestAnimationFrame(animate);

        // Tugma bosilganda qayta boshlash
        document.getElementById('challengeBtn').addEventListener('click', () => {
            startTime = null;
            progressCircle.style.strokeDashoffset = circumference;
            progressText.textContent = `0/${total}`;
            requestAnimationFrame(animate);
        });

      
  function toggleStatus(el) {
    const box = el.querySelector('.status-box');
    box.classList.toggle('bg-red-500');
    box.classList.toggle('bg-transparent');
  }