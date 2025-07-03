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
    animateCountUp(document.getElementById('reward5'), 1000);
    animateCountUp(document.getElementById('reward25'), 2000);
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


  // anu soatniki krc
let seconds = parseInt(localStorage.getItem('serverTime')) || 0;
  const serverTimeEl = document.getElementById('serverTime');

  function updateServerTime() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins > 0) {
      serverTimeEl.textContent = ` ${mins}m ${secs}s`;
    } else {
      serverTimeEl.textContent = ` ${secs}s`;
    }
  }

  // Har sekund yangilab boramiz va localStorage ga yozamiz
  setInterval(() => {
    seconds++;
    localStorage.setItem('serverTime', seconds);
    updateServerTime();
  }, 1000);

  // Sahifa yuklanganda hoziroq ko'rsatadi
  updateServerTime();
  // LOCAL TIME (real vaqt)
  const localTimeEl = document.getElementById('localTime');
  function updateLocalTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    localTimeEl.textContent = ` ${hours}:${minutes}:${seconds}`;
    
  }
  setInterval(updateLocalTime, 1000);
  updateLocalTime();



  
=======

  // navigation panel coilishi
function openPanel() {
    const panel = document.getElementById('navPanel');
    const overlay = document.getElementById('navOverlay');
    const mainContent = document.getElementById('mainContent');

    panel.classList.remove('translate-y-full');
    panel.classList.add('translate-y-0');
    overlay.classList.remove('hidden');

    if (mainContent) {
      mainContent.classList.add('overflow-hidden', 'pointer-events-none', 'select-none');
    }

    animateCoins(0, 1425, 2000);
  }

  function closePanel() {
    const panel = document.getElementById('navPanel');
    const overlay = document.getElementById('navOverlay');
    const mainContent = document.getElementById('mainContent');

    panel.classList.remove('translate-y-0');
    panel.classList.add('translate-y-full');
    overlay.classList.add('hidden');

    if (mainContent) {
      mainContent.classList.remove('overflow-hidden', 'pointer-events-none', 'select-none');
    }
  }

  function animateCoins(start, end, duration) {
    const el = document.getElementById("coinCount");
    let startTime = null;

    function update(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }



  document.addEventListener('DOMContentLoaded', () => {
  // Umumiy toggle funksiyasi
  function setupToggle(buttonClass, activeColor, inactiveColor) {
    document.querySelectorAll(`.${buttonClass}`).forEach(btn => {
      btn.addEventListener('click', () => {
        const wrapper = btn.closest('.flex');

        const isActive = btn.textContent === '✔';

        if (isActive) {
          btn.textContent = '✖';
          btn.classList.remove(`bg-[${activeColor}]`, 'text-black');
          btn.classList.add(`border-[${inactiveColor}]`, `text-[${inactiveColor}]`);
          wrapper.classList.remove(`text-[${activeColor}]`);
          wrapper.classList.add(`text-[${inactiveColor}]`);
        } else {
          btn.textContent = '✔';
          btn.classList.remove(`border-[${inactiveColor}]`, `text-[${inactiveColor}]`);
          btn.classList.add(`bg-[${activeColor}]`, 'text-black');
          wrapper.classList.remove(`text-[${inactiveColor}]`);
          wrapper.classList.add(`text-[${activeColor}]`);
        }
      });
    });
  }

  // Ustiga moslab chaqirish
  setupToggle('sfx-toggle', '#ff4c4c', '#883939');
  setupToggle('music-toggle', '#ff4c4c', '#883939');
});


// About panel ocilishi

let isOpen = false;
    function toggleAbout() {
      const panel = document.getElementById('aboutPanel');
      isOpen = !isOpen;
      if (isOpen) {
        panel.classList.remove('bottom-[-300px]');
        panel.classList.add('bottom-0');
      } else {
        panel.classList.remove('bottom-0');
        panel.classList.add('bottom-[-300px]');
      }
    }
