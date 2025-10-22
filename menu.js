window.addEventListener('load', () => {
  const loading = document.getElementById('loading-screen');
  const menu = document.getElementById('main-menu');
  setTimeout(() => {
    loading.classList.add('hidden');
    menu.classList.remove('hidden');
  }, 4000);
  document.getElementById('play').addEventListener('click', () => window.startGame());
});
