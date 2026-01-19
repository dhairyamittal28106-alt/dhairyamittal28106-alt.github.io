document.addEventListener("DOMContentLoaded", () => {
  // Fade in effect
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("fade-in");
  });

  // Dark mode toggle
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const currentTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);

    themeToggle.addEventListener("click", () => {
      const theme = document.documentElement.getAttribute("data-theme");
      const newTheme = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // Hamburger menu
  const nav = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }

  // Project modal
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector(".modal-close");

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").innerText;
      const desc = card.querySelector("p").innerText;

      modal.querySelector(".modal-title").innerText = title;
      modal.querySelector(".modal-desc").innerText = desc;

      modal.classList.add("open");
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("open");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("open");
    });
  }
});
