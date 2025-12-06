// --- MENU MOBILE : OUVRIR / FERMER ---
const menu = document.querySelector(".menu");
const navLinks = document.querySelectorAll("nav a");


const toggleBtn = document.createElement("div");
toggleBtn.classList.add("toggle-menu");
toggleBtn.innerHTML = "☰";
menu.prepend(toggleBtn);


toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
});


navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

     
        menu.classList.remove("open");

    
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
const edu = document.querySelector('.education');

edu.addEventListener('click', () => {
    edu.classList.add('animate');

    // enlève l'animation après 800ms pour pouvoir rejouer
    setTimeout(() => {
        edu.classList.remove('animate');
    }, 800);
});