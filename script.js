/**
 * PORTFOLIO SCRIPT - MEHDI ZGOULLI
 * Fonctions : Menu Mobile, Navbar Intelligente, Effet Halo, Modale Projets
 */

// --- SÉLECTEURS ---
const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('#mainNav'); 
const navLinks = document.querySelector("#mainNav ul");

let lastScroll = 0;

// --- 1. GESTION DU MENU MOBILE (FIXÉ) ---
// Cette fonction fait apparaître le menu depuis la droite
function openMenu() { 
    sideMenu.style.transform = 'translateX(-16rem)'; 
}

// Cette fonction cache le menu vers la droite
function closeMenu() { 
    sideMenu.style.transform = 'translateX(16rem)'; 
}

// --- 2. NAVBAR INTELLIGENTE & EFFETS DE SCROLL ---
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // A. Effet de fond (Glassmorphism) quand on descend
    if (currentScroll > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'py-3');
        navBar.classList.remove('py-4');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'py-3');
        navBar.classList.add('py-4');
    }

    // B. Navbar flottante (se cache au scroll bas, réapparaît au scroll haut)
    if (currentScroll > lastScroll && currentScroll > 150) {
        navBar.style.transform = 'translateY(-100%)'; // Cache la nav
    } else {
        navBar.style.transform = 'translateY(0)'; // Montre la nav
    }
    lastScroll = currentScroll;

    // C. Indicateur de section active (Lien devient bleu au scroll)
    const sections = document.querySelectorAll('header, div[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-600', 'font-bold');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('text-blue-600', 'font-bold');
                }
            });
        }
    });
});

// --- 3. EFFET EXPERT : HALO LUMINEUX (TRAÇABILITÉ) ---
// Crée un cercle de lumière douce qui suit le mouvement de la souris
const glow = document.createElement('div');
glow.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(77, 131, 242, 0.08) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;
    transform: translate(-50%, -50%);
    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
`;
document.body.appendChild(glow);

window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// --- 4. BASE DE DONNÉES DES PROJETS ---
const projects = [
  {
  title: 'FutureHuman',
  description:
    'AI-driven avatar management platform designed for real-time voice interaction and immersive digital experiences. The system supports advanced avatar customization, role-based identity management, and scalable multi-tenant administration.',
  details: {
    status: 'Beta version',
    users: 'Internal testing (20+ users)',
    role: 'Full-stack developer',
    scope: 'Architecture, backend APIs, real-time interaction, frontend integration'
  },
  technologies: [
    'Node.js',
    'Express',
    'React',
    'Three.js',
    'OpenAI API',
    'Google Cloud TTS'
  ],
  image: './images/futureHuman.png',
  demo: null
},
  {
    title: 'FutureStore',
    description:
      'Restaurant platform with a Back Office for orders/menu management and a Front Office kiosk mode to place orders end-to-end until payment.',
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'MySQL',
      'REST API'
    ],
    image: './images/futurestore.png',
    demo: '#'
  },
   {
    title: 'Deutsch Center Manager',
    description:
      'Management system for a German language center: students, teachers, classes, payments, and financial tracking with structured dashboards.',
    technologies: [
      'React',
      'Node.js',
      'PostgreSQL',
      'REST API'
    ],
    image: './images/deutsch.png',
    demo: '#'
  },
  {
    title: 'Leave Tracker',
    description:
      'Enterprise leave management system with approval workflows, role-based access, and real-time tracking.',
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'MySQL',
      'Spring Security'
    ],
    image: './images/leaveTracker.png',
    demo: '#'
  },
  {
    title: 'Le Vrai Sondage',
    description:
      'Survey management platform to create surveys, collect responses, and analyze results with dashboards.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Tailwind CSS'
    ],
    image: './images/LeVraiSondage.png',
    demo: '#'
  },
  {
    title: 'TheTakeAway',
    description:
      'Restaurant web app with ordering flow and admin menu management.',
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'PostgreSQL'
    ],
    image: './images/TheTakeAway.png',
    demo: '#'
  },
  {
    title: 'Immonexus',
    description:
      'Real estate portal connecting buyers and sellers with listings and advanced filtering.',
    technologies: [
      'PHP',
      'Symfony',
      'MySQL',
      'Bootstrap'
    ],
    image: './images/Immonexus2.png',
    demo: '#'
  }
];



function openProjectPopup(index) {
  const project = projects[index];
  const popup = document.getElementById('projectPopup');
  const modalContent = document.getElementById('modalContent');

  // Remplissage des textes et images
  document.getElementById('popupTitle').innerText = project.title;
  document.getElementById('popupDescription').innerText = project.description;
  document.getElementById('popupImage').src = project.image;

  // ✅ Project Details (affiché seulement si présent)
  const detailsBlock = document.getElementById('projectDetails');
  if (detailsBlock && project.details) {
    detailsBlock.innerHTML = `
      <p><strong>Status:</strong> ${project.details.status}</p>
      <p><strong>Users:</strong> ${project.details.users}</p>
      <p><strong>Role:</strong> ${project.details.role}</p>
      <p><strong>Scope:</strong> ${project.details.scope}</p>
    `;
    detailsBlock.classList.remove('hidden');
  } else if (detailsBlock) {
    detailsBlock.classList.add('hidden');
    detailsBlock.innerHTML = '';
  }

  // Génération des badges technologies
  const techContainer = document.getElementById('technologiesList');
  techContainer.innerHTML = '';
  project.technologies.forEach(tech => {
    const span = document.createElement('span');
    span.className =
      'px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100';
    span.innerText = tech;
    techContainer.appendChild(span);
  });

  // ✅ Bouton demo (caché si demo null ou '#')
  const demoLink = document.getElementById('demoLink');
  if (!project.demo || project.demo === '#') {
    demoLink.classList.add('hidden');
    demoLink.removeAttribute('href');
  } else {
    demoLink.classList.remove('hidden');
    demoLink.href = project.demo;
  }

  // Affichage avec animation fluide
  popup.classList.remove('hidden');
  setTimeout(() => {
    modalContent.classList.remove('scale-95', 'opacity-0');
    modalContent.classList.add('scale-100', 'opacity-100');
  }, 10);

  // Bloque le scroll de la page derrière
  document.body.style.overflow = 'hidden';
}


function closeProjectPopup() {
    const modalContent = document.getElementById('modalContent');
    
    // Animation de fermeture
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        document.getElementById('projectPopup').classList.add('hidden');
    }, 300);
    
    // Réactive le scroll
    document.body.style.overflow = 'auto';
}

// --- 6. ANIMATION FLOTTANTE POUR LES ICONES TECH ---
function animateTechIcons() {
    const icons = document.querySelectorAll('.tech-icon');
    
    icons.forEach((icon, index) => {
        // Définit un délai aléatoire pour que chaque icône bouge différemment
        icon.style.animation = `floatingIcon ${3 + Math.random() * 2}s ease-in-out infinite`;
        icon.style.animationDelay = `${index * 0.2}s`;
    });
}

// Ajoute ce CSS dynamiquement pour l'animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatingIcon {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
    .tech-icon {
        transition: all 0.3s ease;
    }
    .tech-icon:hover {
        animation-play-state: paused !important;
        transform: scale(1.1) !important;
        border-color: #2563eb !important;
    }
`;
document.head.appendChild(style);

// Lancer l'animation au chargement
window.addEventListener('DOMContentLoaded', animateTechIcons);
function toggleWorkProjects() {
  const extras = document.querySelectorAll('.extra-project');
  const btn = document.getElementById('showMoreBtn');
  if (!btn) return;

  // si le premier extra est caché => on affiche
  const shouldShow = extras.length > 0 && extras[0].classList.contains('hidden');

  extras.forEach(el => {
    el.classList.toggle('hidden', !shouldShow);
  });

  btn.textContent = shouldShow ? 'Show less' : 'Show more';

  // optionnel: scroll léger vers le bouton quand on replie
  if (!shouldShow) {
    btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
