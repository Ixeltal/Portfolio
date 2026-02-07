const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
 
menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  document.body.classList.toggle('no-scroll');
});




window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


const header = document.querySelector("header");

// Position initiale du header
const headerOffset = header.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerOffset) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-menu');
    document.body.classList.remove('no-scroll');
  });
});


// === COMPTEUR DE PROJETS ===
const allProjects = document.querySelectorAll("[data-category]");
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
  const filter = button.dataset.filter;
  const countSpan = button.querySelector(".count");

  if (filter === "all") {
    countSpan.textContent = allProjects.length;
  } else {
    const count = [...allProjects].filter(
      project => project.dataset.category === filter
    ).length;

    countSpan.textContent = count;
  }
});

// === FILTRAGE DES PROJETS ===
const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-link");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach(project => {
      const category = project.dataset.category;

      if (filter === "all" || category === filter) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  });
});
