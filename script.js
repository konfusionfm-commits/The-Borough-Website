// Mouse reactive background
document.addEventListener('mousemove', e => {
  document.body.style.setProperty('--x', `${(e.clientX / innerWidth) * 100}%`);
  document.body.style.setProperty('--y', `${(e.clientY / innerHeight) * 100}%`);
});

// Guides logic (NO scrollIntoView)
const guideContent = {
  beginner: `
    <h3>Beginner Roleplay</h3>
    <p>Learn realistic character creation, interaction, and immersion.</p>
  `,
  advanced: `
    <h3>Advanced Roleplay</h3>
    <p>Long-term arcs, consequences, and high-level storytelling.</p>
  `,
  economy: `
    <h3>Economy & Progression</h3>
    <p>Understand The Borough’s progressive economy systems.</p>
  `
};

document.querySelectorAll('.guide').forEach(btn => {
  btn.onclick = () => {
    const panel = document.getElementById('guide-content');
    panel.innerHTML = guideContent[btn.dataset.guide];
    panel.classList.remove('hidden');
    panel.classList.add('active');
  };
});

// Smooth nav scrolling with offset for fixed navbar
const navLinks = document.querySelectorAll('.nav a');
const navHeight = document.querySelector('.nav').offsetHeight;

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    const targetPosition =
      targetSection.getBoundingClientRect().top +
      window.pageYOffset -
      navHeight -
      20; // extra breathing room

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

