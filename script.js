const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul")
function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
    }else {
     navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50');
    } 
})


// Fonction pour ouvrir le popup avec les détails du projet
function openProjectPopup(title, description, technologies, link) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('technologiesList').innerText = technologies.join(', ');
    document.getElementById('popupLink').href = link;
    document.getElementById('projectPopup').classList.remove('hidden'); // Afficher le popup

    // Désactiver le défilement en arrière-plan
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer le popup
function closeProjectPopup() {
    document.getElementById('projectPopup').classList.add('hidden'); // Masquer le popup
    
    // Réactiver le défilement
    document.body.style.overflow = 'auto';
}

// Ajouter des événements clic pour chaque projet
document.querySelectorAll('.aspect-square').forEach(project => {
    project.addEventListener('click', () => {
        const title = project.querySelector('h2').innerText; // Titre du projet
        const description = 'Description détaillée du projet ici.'; // Remplace par la vraie description
        const technologies = ['HTML', 'CSS', 'JavaScript']; // Remplace par les vraies technologies
        const link = 'https://github.com/your-repo'; // Remplace par le lien réel vers GitHub

        openProjectPopup(title, description, technologies, link);
    });
});

const projects = [
    {
        title: "Leave Tracker Web App",
        description: "I developed a leave management app that streamlines leave requests with real-time email notifications, automatic balance calculations, and LDAP server integration for secure employee data. The app features two-factor authentication (2FA) and a predictive model to analyze ten years of historical data for forecasting leave patterns.",
        technologies: ['Spring Boot', 'Angular', 'Python', 'Boostrap...'],
        link: 'https://github.com/mahdi-zg/Itech-Progress-App-itech-progress',
        demo: 'https://project1-demo.com'
    },
    {
        title: "Survey Management Web App",
        description: "I developed a web application for managing surveys, which helps understand users through questionnaires. This tool allows easy survey creation and sharing, collecting important feedback. With features like email verification and clear statistics, it helps make informed decisions based on what users say. This application is key to gaining insights and conducting research that can guide future actions.",
        technologies: ['HTML', 'CSS', 'Ruby', 'SQLite...'],
        link: 'https://github.com/project2',
        demo: 'https://project2-demo.com'
    },
    {
        title: "Restaurant Web App",
        description: "An e-commerce platform that allows users to shop seamlessly with various payment options.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
        link: 'https://github.com/project3',
        demo: 'https://project3-demo.com'
    },
    {
        title: "Frontend Project 4",
        description: "A personal portfolio website that showcases my work and skills in web development.",
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        link: 'https://github.com/project4',
        demo: 'https://project4-demo.com'
    }
];

// Fonction pour ouvrir le popup avec les détails du projet
function openProjectPopup(title, description, technologies, link, demo) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('technologiesList').innerText = technologies.join(', ');
    document.getElementById('popupLink').href = link;
    document.getElementById('demoLink').href = demo; // Mettre à jour le lien de démo
    document.getElementById('projectPopup').classList.remove('hidden'); // Afficher le popup

    // Désactiver le défilement en arrière-plan
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer le popup
function closeProjectPopup() {
    document.getElementById('projectPopup').classList.add('hidden'); // Masquer le popup
    
    // Réactiver le défilement
    document.body.style.overflow = 'auto';
}

// Ajouter des événements clic pour chaque projet
document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('click', () => {
        const index = project.getAttribute('data-index'); // Récupérer l'index du projet
        const { title, description, technologies, link, demo } = projects[index]; // Obtenir les détails du projet

        openProjectPopup(title, description, technologies, link, demo);
    });
});