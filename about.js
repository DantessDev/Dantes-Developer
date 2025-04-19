document.addEventListener("DOMContentLoaded", function () {
  // Efeito de digitação no subtítulo
  const subtitle = document.querySelector(".about-subtitle");
  const originalText = subtitle.textContent;
  subtitle.textContent = "";

  let i = 0;
  const typingEffect = setInterval(() => {
    if (i < originalText.length) {
      subtitle.textContent += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typingEffect);
    }
  }, 50);

  // Efeito de parallax no background
  const heroBackground = document.querySelector(".hero-background");
  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    heroBackground.style.transform = `translate(-${x * 20}px, -${y * 20}px)`;
  });

  // Efeito de scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Animação de hover nos cards de tecnologia
  const techIcons = document.querySelectorAll(".tech-icon");
  techIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "translateY(-5px) scale(1.1)";
      icon.style.filter = "drop-shadow(0 5px 15px rgba(157, 0, 255, 0.5))";
    });

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "translateY(0) scale(1)";
      icon.style.filter = "none";
    });
  });

  // Atualização dinâmica do ano no footer
  const yearSpan = document.querySelector("#current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Intersection Observer para animações ao scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".about-text p").forEach((p) => {
    observer.observe(p);
  });
});
