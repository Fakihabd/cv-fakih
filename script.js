// script.js - HARI 3: JS DASAR

// 1. BUTTON HIRE ME → ALERT
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault(); // Biar gak buka email beneran
  alert('Terima kasih! Email terkirim ke fakihabd54@gmail.com 🚀');
});

// 2. SKILL CARD HIDE/SHOW
const skillSection = document.querySelector('section:nth-of-type(1)'); // Skill Saya
const skillToggle = document.createElement('button');
skillToggle.textContent = '👁️ Toggle Skill';
skillToggle.style.cssText = 'margin: 15px 0; padding: 8px 16px; background: #4a00e0; color: white; border: none; border-radius: 50px; cursor: pointer;';
skillSection.before(skillToggle);

let skillVisible = true;
skillToggle.addEventListener('click', () => {
  const ul = skillSection.querySelector('ul');
  if (skillVisible) {
    ul.style.display = 'none';
    skillToggle.textContent = '👁️ Show Skill';
  } else {
    ul.style.display = 'block';
    skillToggle.textContent = '👁️ Hide Skill';
  }
  skillVisible = !skillVisible;
});

// 3. FOTO KLIK → ZOOM MODAL
const foto = document.querySelector('.foto');
const modal = document.createElement('div');
modal.style.cssText = 'display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center; z-index:999;';
const modalImg = document.createElement('img');
modalImg.style.cssText = 'max-width:90%; max-height:90%; border-radius:15px; box-shadow:0 0 30px rgba(255,255,255,0.5);';
modal.appendChild(modalImg);
document.body.appendChild(modal);

foto.style.cursor = 'zoom-in';
foto.addEventListener('click', () => {
  modalImg.src = foto.src;
  modal.style.display = 'flex';
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});