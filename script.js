/* ==========================================================================
   AM SAGOR PORTFOLIO — MAIN SCRIPT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderSkills();
  renderProjects();
  renderTimeline();

  initLucideIcons();
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
  initScrollSpy();
  initRevealOnScroll();
  initBackToTop();
  initContactForm();
});

/* -------------------------------------------------------------------- */
/* Icons                                                                 */
/* -------------------------------------------------------------------- */
function initLucideIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

/* -------------------------------------------------------------------- */
/* Render: Services                                                      */
/* -------------------------------------------------------------------- */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = servicesData
    .map(
      (service) => `
    <article class="service-card">
      <div class="service-card__glow" aria-hidden="true"></div>
      <div class="service-card__icon"><i data-lucide="${service.icon}"></i></div>
      <h3 class="service-card__title">${service.title}</h3>
      <p class="service-card__desc">${service.description}</p>
      <span class="service-card__arrow" aria-hidden="true"><i data-lucide="arrow-up-right"></i></span>
    </article>
  `
    )
    .join("");

  initLucideIcons();
}

/* -------------------------------------------------------------------- */
/* Render: Skills                                                        */
/* -------------------------------------------------------------------- */
function renderSkills() {
  const wrap = document.getElementById("skillsCategories");
  if (!wrap) return;

  wrap.innerHTML = skillsData
    .map(
      (group) => `
    <div class="skill-category">
      <div class="skill-category__head">
        <span class="skill-category__icon"><i data-lucide="${group.icon}"></i></span>
        <h3>${group.category}</h3>
      </div>
      <div class="skill-badges">
        ${group.skills
          .map(
            (skill) => `
          <span class="skill-badge">
            <i data-lucide="${skill.icon}"></i>
            ${skill.name}
          </span>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");

  initLucideIcons();
}

/* -------------------------------------------------------------------- */
/* Render: Projects                                                      */
/* -------------------------------------------------------------------- */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projectsData
    .map(
      (project, i) => `
    <article class="project-card">
      <div class="project-card__image-wrap">
        <img
          src="${project.image}"
          alt="Screenshot of ${project.title}"
          class="project-card__image"
          loading="lazy"
          onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('project-card__image-wrap--fallback');"
        />
        <div class="project-card__fallback" aria-hidden="true">
          <i data-lucide="layout-template"></i>
        </div>
        <div class="project-card__overlay"></div>
      </div>

      <div class="project-card__body">
        <span class="project-card__status project-card__status--${project.status === "Completed" ? "complete" : "active"}">${project.status}</span>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__desc">${project.description}</p>

        <div class="project-card__tech">
          ${project.tech.map((t) => `<span class="tech-badge">${t}</span>`).join("")}
        </div>

      </div>
    </article>
  `
    )
    .join("");

  initLucideIcons();
}

/* -------------------------------------------------------------------- */
/* Render: Timeline                                                      */
/* -------------------------------------------------------------------- */
function renderTimeline() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;

  wrap.innerHTML = timelineData
    .map(
      (item) => `
    <div class="timeline__item reveal">
      <div class="timeline__point"></div>
      <div class="timeline__card">
        <span class="timeline__year">${item.year}</span>
        <h3 class="timeline__title">${item.title}</h3>
        <p class="timeline__place">${item.place}</p>
        <p class="timeline__desc">${item.description}</p>
      </div>
    </div>
  `
    )
    .join("");
}

/* -------------------------------------------------------------------- */
/* Navbar scroll state (glass/blur when scrolled)                        */
/* -------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle("navbar--scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* -------------------------------------------------------------------- */
/* Mobile hamburger menu                                                 */
/* -------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("navbar__nav--open");
    toggle.classList.remove("navbar__toggle--open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("navbar__nav--open");
    toggle.classList.toggle("navbar__toggle--open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
  });

  menu.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* -------------------------------------------------------------------- */
/* Smooth scrolling for in-page anchors                                  */
/* -------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length <= 1) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.getElementById("navbar")?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;

      window.scrollTo({
        top,
        behavior: prefersReducedMotion() ? "auto" : "smooth"
      });
    });
  });
}

/* -------------------------------------------------------------------- */
/* Active nav indicator via IntersectionObserver                         */
/* -------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = ["home", "about", "services", "skills", "projects", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const links = document.querySelectorAll("[data-nav]");
  if (!sections.length || !links.length) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* -------------------------------------------------------------------- */
/* Reveal-on-scroll animations                                           */
/* -------------------------------------------------------------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (prefersReducedMotion()) {
    items.forEach((el) => el.classList.add("reveal--visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}

/* -------------------------------------------------------------------- */
/* Back-to-top button                                                    */
/* -------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  const onScroll = () => {
    btn.classList.toggle("back-to-top--visible", window.scrollY > 500);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  });
}

/* -------------------------------------------------------------------- */
/* Contact form validation (frontend only)                               */
/* -------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const success = document.getElementById("formSuccess");

  const fields = {
    name: { el: document.getElementById("name"), error: document.getElementById("nameError") },
    email: { el: document.getElementById("email"), error: document.getElementById("emailError") },
    subject: { el: document.getElementById("subject"), error: document.getElementById("subjectError") },
    message: { el: document.getElementById("message"), error: document.getElementById("messageError") }
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setError = (field, message) => {
    field.el.classList.toggle("has-error", Boolean(message));
    field.error.textContent = message || "";
  };

  const validate = () => {
    let isValid = true;

    if (!fields.name.el.value.trim()) {
      setError(fields.name, "Please enter your name.");
      isValid = false;
    } else {
      setError(fields.name, "");
    }

    if (!fields.email.el.value.trim()) {
      setError(fields.email, "Please enter your email.");
      isValid = false;
    } else if (!emailPattern.test(fields.email.el.value.trim())) {
      setError(fields.email, "Please enter a valid email address.");
      isValid = false;
    } else {
      setError(fields.email, "");
    }

    if (!fields.subject.el.value.trim()) {
      setError(fields.subject, "Please enter a subject.");
      isValid = false;
    } else {
      setError(fields.subject, "");
    }

    if (!fields.message.el.value.trim()) {
      setError(fields.message, "Please enter a message.");
      isValid = false;
    } else if (fields.message.el.value.trim().length < 10) {
      setError(fields.message, "Message should be at least 10 characters.");
      isValid = false;
    } else {
      setError(fields.message, "");
    }

    return isValid;
  };

  Object.values(fields).forEach(({ el }) => {
    el.addEventListener("blur", validate);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    success.classList.remove("form__success--visible");

    if (!validate()) return;

    const senderName = fields.name.el.value.trim();
    const senderEmail = fields.email.el.value.trim();
    const subject = fields.subject.el.value.trim();
    const message = fields.message.el.value.trim();
    const body = `Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`;

    window.location.href = `mailto:sagor.stu4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    success.classList.add("form__success--visible");
  });
}

/* -------------------------------------------------------------------- */
/* Utility                                                               */
/* -------------------------------------------------------------------- */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
