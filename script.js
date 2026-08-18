// ========================================
// MENU MOBILE
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Fecha o menu quando clicar em um link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


// ========================================
// HEADER — ALTERAÇÃO AO ROLAR
// ========================================

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const SCROLL_THRESHOLD = 40;

  const updateHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
  };

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeaderState();
        ticking = false;
      });

      ticking = true;
    }
  });

  updateHeaderState();
}


// ========================================
// ANIMAÇÃO DE ENTRADA (scroll reveal + stagger)
// ========================================

const animatedElements = document.querySelectorAll(
  ".hero-copy, .hero-visual, .section-heading, " +
  ".about-visual, .about-copy, " +
  ".service-card, " +
  ".benefits-copy, .benefits-panel, " +
  ".process-step, " +
  ".testimonial-card, " +
  ".cta-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

animatedElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});


// ========================================
// ANO AUTOMÁTICO DO FOOTER
// ========================================

const footerYear = document.querySelector(".footer-inner span");

if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} · CRN [00000] — placeholder`;
}
