window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('welcomeMessage').classList.remove('hidden');

    // HI! animatsiyasi
    const hi = document.getElementById('hiText');
    const button = document.getElementById('button');
    setTimeout(() => {
      hi.classList.remove('opacity-0', 'scale-50');
      hi.classList.add('opacity-100', 'scale-100');
    }, 100);
    setTimeout(() => {
        button.classList.remove('opacity-0', 'scale-50');
        button.classList.add('opacity-100', 'scale-100');
    }, 100);

    // Typing
    typeText("type1", "Welcome to my personal website.", 30, () => {
      typeText("type2", "I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this.`", 25, () => {
        typeText("type3", "You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.", 25);
      });
    });
  });

  function typeText(elementId, text, speed, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        document.getElementById(elementId).textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

  function closeWelcome() {
    document.getElementById('welcomeMessage').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
  }