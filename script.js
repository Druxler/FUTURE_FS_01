/* =====================================================
   OTSILE SEBOLA — PORTFOLIO JAVASCRIPT
   script.js  |  Linked from index.html
===================================================== */

/* ─────────────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────────────── */
const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");

document.addEventListener("mousemove", (e) => {
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});

document.addEventListener("mousedown", () => {
  ring.style.width = "20px";
  ring.style.height = "20px";
  ring.style.opacity = "1";
});

document.addEventListener("mouseup", () => {
  ring.style.width = "32px";
  ring.style.height = "32px";
  ring.style.opacity = ".6";
});

/* ─────────────────────────────────────────────────
   LIVE CLOCK (footer)
───────────────────────────────────────────────── */
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toTimeString().slice(0, 8);
}
setInterval(updateClock, 1000);
updateClock();

/* ─────────────────────────────────────────────────
   BINARY RAIN TRANSITION
───────────────────────────────────────────────── */
const overlay = document.getElementById("transition-overlay");
const canvas = document.getElementById("binary-canvas");
const ctx = canvas.getContext("2d");
let raf = null;
let drops = [];

/** Human-readable labels shown during each page transition */
const PAGE_LABELS = {
  welcome: "INITIALIZING...",
  hero: "LOADING_HOME",
  about: "LOADING_ABOUT",
  skills: "LOADING_SKILLS",
  projects: "LOADING_PROJECTS",
  resume: "LOADING_RESUME",
  contact: "LOADING_CONTACT",
};

/**
 * Runs the binary-rain animation, then calls cb() when done.
 * @param {string}   label  - Text displayed during the transition
 * @param {Function} cb     - Callback executed after animation finishes
 */
function startBinary(label, cb) {
  const tl = document.getElementById("transition-label");
  tl.textContent = label || "LOADING...";
  overlay.classList.add("active");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const cols = Math.floor(canvas.width / 14);
  drops = Array(cols).fill(1);

  let frames = 0;

  function draw() {
    ctx.fillStyle = "rgba(2,11,24,0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = '13px "Share Tech Mono"';

    for (let i = 0; i < drops.length; i++) {
      const text = Math.random() > 0.5 ? "1" : "0";
      ctx.fillStyle =
        Math.random() > 0.85
          ? "#00ff9d"
          : `rgba(0,212,255,${(Math.random() * 0.8 + 0.2).toFixed(2)})`;
      ctx.fillText(text, i * 14, drops[i] * 14);

      if (drops[i] * 14 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    frames++;
    if (frames < 40) {
      raf = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(raf);
      overlay.classList.remove("active");
      cb();
    }
  }

  if (raf) cancelAnimationFrame(raf);
  draw();
}

/* ─────────────────────────────────────────────────
   PAGE ROUTING
───────────────────────────────────────────────── */
let currentPage = "welcome";

/**
 * Navigates to the target page with a binary-rain transition.
 * @param {string} page - The page key (e.g. 'hero', 'about')
 */
function goTo(page) {
  if (page === currentPage) return;

  startBinary(PAGE_LABELS[page], () => {
    // Hide old page
    document.getElementById("page-" + currentPage).classList.remove("active");

    // Show & animate new page
    const next = document.getElementById("page-" + page);
    next.classList.add("active");
    next.classList.remove("animating");
    void next.offsetWidth; // force reflow to restart animation
    next.classList.add("animating");

    currentPage = page;

    // Update active nav link
    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.classList.toggle("active", a.dataset.page === page);
    });
  });
}

// Mark the initial nav link as active on load
document.querySelector('[data-page="welcome"]').classList.add("active");

/* ─────────────────────────────────────────────────
   CONTACT FORM SUBMISSION
───────────────────────────────────────────────── */

/**
 * Validates and "submits" the contact form.
 *
 * To wire this up for real delivery, replace the success block
 * with one of these approaches:
 *
 *   Option A — EmailJS (frontend, no server needed):
 *     emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { name, email, subject, message });
 *     });
 */
function handleSubmit() {
  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const subject = document.getElementById("cf-subject").value.trim();
  const message = document.getElementById("cf-message").value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert("Please fill in all required fields (Name, Email, Message).");
    return;
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  /* ── Replace the block below with your real send logic ── */
  console.log("Form data:", { name, email, subject, message });

  // Show success message
  const successEl = document.getElementById("formSuccess");
  successEl.style.display = "block";

  // Clear all fields
  ["cf-name", "cf-email", "cf-subject", "cf-message"].forEach((id) => {
    document.getElementById(id).value = "";
  });

  // Auto-hide success message after 4 seconds
  setTimeout(() => {
    successEl.style.display = "none";
  }, 4000);
}
