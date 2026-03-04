// Booking URLs – update here if details change
const WHATSAPP_URL = "https://wa.me/919944037910";
const INSTAGRAM_URL = "https://www.instagram.com/saleena_skin__clinic";
const GOOGLE_URL =
  "https://www.google.com/search?q=Ambur+Saleena+Cosmatic+and+Skin+Care";

function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank");
}

function openInstagram() {
  window.open(INSTAGRAM_URL, "_blank");
}

function openGoogle() {
  window.open(GOOGLE_URL, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav-links a");
  const bookingButtons = document.querySelectorAll("[data-action]");
  const yearSpan = document.getElementById("currentYear");

  // Set current year in footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Mobile navigation toggle
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("active");
      mainNav.classList.toggle("open");
    });
  }

  // Close mobile nav after clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (mainNav && navToggle && mainNav.classList.contains("open")) {
        mainNav.classList.remove("open");
        navToggle.classList.remove("active");
      }
    });
  });

  // Booking buttons
  bookingButtons.forEach((btn) => {
    const action = btn.getAttribute("data-action");
    if (!action) return;

    btn.addEventListener("click", () => {
      if (action === "whatsapp") {
        openWhatsApp();
      } else if (action === "instagram") {
        openInstagram();
      } else if (action === "google") {
        openGoogle();
      }
    });
  });
});

// Navigation toggle for mobile
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  // Close menu when a nav link is clicked (mobile)
  mainNav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.classList.contains("nav-link")) {
      navToggle.classList.remove("active");
      mainNav.classList.remove("active");
    }
  });
}

// Smooth scroll for internal links (fallback in case browser doesn't support CSS smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Booking and contact links
const WHATSAPP_URL = "https://wa.me/919944037910";
const INSTAGRAM_URL = "https://www.instagram.com/saleena_skin__clinic";
const GOOGLE_URL =
  "https://www.google.com/search?q=Ambur+Saleena+Cosmatic+and+Skin+Care";

function openInNewTab(url) {
  window.open(url, "_blank", "noopener");
}

function openWhatsApp() {
  openInNewTab(WHATSAPP_URL);
}

function openInstagram() {
  openInNewTab(INSTAGRAM_URL);
}

function openGoogle() {
  openInNewTab(GOOGLE_URL);
}

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    if (action === "whatsapp") {
      openWhatsApp();
    } else if (action === "instagram") {
      openInstagram();
    } else if (action === "google") {
      openGoogle();
    }
  });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

