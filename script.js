// LOADER
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }, 1500);
});

// DARK MODE
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  toggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggle.textContent = '☀️ Light';
}

// PESAN VIA WA
document.querySelectorAll('.resto-cta').forEach(btn => {
  btn.addEventListener('click', () => {
    const phone = "628123456789"; // GANTI NOMOR WA LU!
    const message = "Halo Mie Fakih! Saya mau pesan:";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  });
});