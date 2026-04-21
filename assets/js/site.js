const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const faqButtons = document.querySelectorAll(".faq-question");
const reveals = document.querySelectorAll(".reveal");
const yearNodes = document.querySelectorAll("[data-year]");

if (header) {
  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    if (!item) return;

    const isOpen = item.classList.contains("open");
    const group = item.parentElement?.querySelectorAll(".faq-item") ?? [];

    group.forEach((node) => node.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

if (reveals.length) {
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
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  reveals.forEach((node) => observer.observe(node));
}

yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear().toString();
});
