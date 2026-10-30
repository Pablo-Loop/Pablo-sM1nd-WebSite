const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader');

    if (loader) {
        const tl = gsap.timeline();
        
        // Animación de los elementos geométricos del fondo y las letras una por una
        tl.from(".loader-geometry", { scale: 0, rotation: 120, opacity: 0, duration: 1, stagger: 0.1, ease: "back.out(1.7)" })
          .from(".load-char", { y: 30, opacity: 0, duration: 0.4, stagger: 0.05, ease: "power3.out" }, "-=0.6")
          .from(".loader-title", { y: 15, opacity: 0, duration: 0.4, ease: "power3.out" }, "-=0.2")
          .to(".loader-bar", { scaleX: 1, duration: 0.6, ease: "power2.inOut" })
          .to("#loader", { yPercent: -100, duration: 0.7, ease: "power4.inOut" })
          .from("header", { y: -50, opacity: 0, duration: 0.6, ease: "power3.out" })
          .from(".container-intro > *", { y: 40, opacity: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }, "-=0.3")
          .from(".videoSnobra", { scale: 0.9, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
    } else {
        gsap.from("header", { y: -50, opacity: 0, duration: 0.6, ease: "power3.out" });
        gsap.from(".service-intro > div > *", { y: 30, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" });
    }

    gsap.from(".skills, .video-card, .div-sites, .software-item", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: loader ? 1.8 : 0.4
    });
});

document.getElementById("modo").addEventListener("click",function () {
    document.body.classList.toggle("oscuro");
})