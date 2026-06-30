/* ============================================================
   VEREDIAN.AI — Main JavaScript
   Navigation, forms, language toggle
   ============================================================ */

(function () {
  'use strict';

  /* ── Navbar: transparent → solid on scroll ────────────────── */
  const nav = document.querySelector('.nav');

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 80) {
      nav.classList.add('nav--solid');
    } else {
      nav.classList.remove('nav--solid');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // Initial check

  /* ── Mobile hamburger toggle ──────────────────────────────── */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileOverlay = document.querySelector('.nav__mobile-overlay');

  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
    });

    // Close overlay when clicking a link
    const mobileLinks = mobileOverlay.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Form Validation ──────────────────────────────────────── */
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(field, message) {
    clearError(field);
    field.classList.add('form__input--error');
    var error = document.createElement('div');
    error.className = 'form__error';
    error.textContent = message;
    field.parentNode.appendChild(error);
  }

  function clearError(field) {
    field.classList.remove('form__input--error');
    field.classList.remove('form__select--error');
    field.classList.remove('form__textarea--error');
    var existing = field.parentNode.querySelector('.form__error');
    if (existing) existing.remove();
  }

  function clearAllErrors(form) {
    form.querySelectorAll('.form__error').forEach(function (el) { el.remove(); });
    form.querySelectorAll('.form__input--error, .form__select--error, .form__textarea--error').forEach(function (el) {
      el.classList.remove('form__input--error', 'form__select--error', 'form__textarea--error');
    });
  }

  /* ── Contact Form ─────────────────────────────────────────── */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearAllErrors(contactForm);

      var valid = true;
      var name = contactForm.querySelector('#contact-name');
      var email = contactForm.querySelector('#contact-email');
      var message = contactForm.querySelector('#contact-message');
      var honeypot = contactForm.querySelector('#contact-website');

      // Honeypot check
      if (honeypot && honeypot.value !== '') {
        return; // Bot detected
      }

      if (!name.value.trim()) {
        showError(name, 'Name is required');
        valid = false;
      }

      if (!email.value.trim()) {
        showError(email, 'Email is required');
        valid = false;
      } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        valid = false;
      }

      if (!message.value.trim()) {
        showError(message, 'Message is required');
        valid = false;
      } else if (message.value.length > 1000) {
        showError(message, 'Message must be 1000 characters or fewer');
        valid = false;
      }

      if (valid) {
        contactForm.style.display = 'none';
        var success = document.getElementById('contact-success');
        if (success) success.style.display = 'block';
      }
    });
  }

  /* ── Deck Request Form ────────────────────────────────────── */
  var deckForm = document.getElementById('deck-form');
  if (deckForm) {
    deckForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearAllErrors(deckForm);

      var valid = true;
      var fullName = deckForm.querySelector('#deck-name');
      var title = deckForm.querySelector('#deck-title');
      var org = deckForm.querySelector('#deck-org');
      var email = deckForm.querySelector('#deck-email');
      var country = deckForm.querySelector('#deck-country');
      var nda = deckForm.querySelector('#deck-nda');
      var note = deckForm.querySelector('#deck-note');
      var honeypot = deckForm.querySelector('#deck-website');

      // Honeypot check
      if (honeypot && honeypot.value !== '') {
        return;
      }

      if (!fullName.value.trim()) {
        showError(fullName, 'Full name is required');
        valid = false;
      }

      if (!title.value.trim()) {
        showError(title, 'Title / Role is required');
        valid = false;
      }

      if (!org.value.trim()) {
        showError(org, 'Organisation is required');
        valid = false;
      }

      if (!email.value.trim()) {
        showError(email, 'Email is required');
        valid = false;
      } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid business email address');
        valid = false;
      }

      if (!country.value) {
        showError(country, 'Please select a country');
        country.classList.add('form__select--error');
        valid = false;
      }

      if (note && note.value.length > 300) {
        showError(note, 'Note must be 300 characters or fewer');
        valid = false;
      }

      if (!nda.checked) {
        var ndaGroup = nda.closest('.form__group');
        var error = document.createElement('div');
        error.className = 'form__error';
        error.textContent = 'You must acknowledge the NDA terms';
        ndaGroup.appendChild(error);
        valid = false;
      }

      if (valid) {
        deckForm.style.display = 'none';
        var success = document.getElementById('deck-success');
        if (success) success.style.display = 'block';
      }
    });
  }

  /* ── Language Toggle ────────────────────────────────────────── */
  var langToggle = document.querySelector('.nav__lang');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      var current = langToggle.textContent.trim();
      if (current === 'EN | AR') {
        langToggle.textContent = 'AR | EN';
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
      } else {
        langToggle.textContent = 'EN | AR';
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
      }
    });
  }

  /* ── Active nav link highlighting ─────────────────────────── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.nav__links a, .nav__mobile-overlay a');
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

})();
