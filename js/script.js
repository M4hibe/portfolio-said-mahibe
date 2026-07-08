// ===== Mobile menu =====
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    menuBtn.classList.remove('active');
    nav.classList.remove('open');
  });
});

// ===== Navbar shadow on scroll =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Scroll fade-in animation =====
const fadeElements = document.querySelectorAll(
  '.section-title, .timeline-item, .card, .skill-block, .about-content p, .hero-text, .hero-card'
);

fadeElements.forEach(function (el) {
  el.classList.add('fade-in');
});

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach(function (el) {
  observer.observe(el);
});

// ===== Language bars animation =====
const barFills = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

barFills.forEach(function (bar) {
  barObserver.observe(bar);
});

// ===== Contact form → mailto =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var subject = encodeURIComponent('Contact portfolio — ' + name);
  var body = encodeURIComponent(
    'Nom: ' + name + '\nEmail: ' + email + '\n\n' + message
  );

  window.location.href = 'mailto:saaidmahibe@gmail.com?subject=' + subject + '&body=' + body;
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = nav.querySelectorAll('a[href^="#"]');

window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY + 100;

  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(function (link) {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + id) {
          link.style.color = '#2563eb';
        }
      });
    }
  });
});
