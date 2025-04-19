// Efeito de scroll na navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav-container");
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Animação dos elementos
document.addEventListener("DOMContentLoaded", function () {
  // Animação do conteúdo
  gsap.from(".content-side h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.from(".content-side p", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.6,
  });

  gsap.from(".buttons-content", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.9,
  });

  // Efeito flutuante para a imagem
  gsap.to(".image-side img", {
    y: 10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});
