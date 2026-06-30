/* ============================================================
   VEREDIAN.AI — Animations
   IntersectionObserver fade-in, count-up stats, circuit BG
   Total budget: < 80KB gzipped
   ============================================================ */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Fade-in on scroll ────────────────────────────────────── */
  function initFadeIn() {
    var elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    if (reducedMotion) {
      elements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Stagger siblings
          var parent = entry.target.parentElement;
          var siblings = parent ? parent.querySelectorAll('.fade-in') : [entry.target];
          var index = Array.prototype.indexOf.call(siblings, entry.target);
          var delay = index * 80; // 80ms stagger

          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -20% 0px'
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Count-up animation ───────────────────────────────────── */
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCountUp(element, target, duration, suffix) {
    if (reducedMotion) {
      element.textContent = target + (suffix || '');
      return;
    }

    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = easeOutCubic(progress);
      var current = Math.floor(eased * target);
      element.textContent = current + (suffix || '');

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = target + (suffix || '');
      }
    }

    requestAnimationFrame(step);
  }

  function initCountUp() {
    var statNumbers = document.querySelectorAll('[data-count]');
    if (!statNumbers.length) return;

    if (reducedMotion) {
      statNumbers.forEach(function (el) {
        el.textContent = el.getAttribute('data-count') + (el.getAttribute('data-suffix') || '');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-count'), 10);
          var suffix = el.getAttribute('data-suffix') || '';
          animateCountUp(el, target, 1200, suffix);
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.8
    });

    statNumbers.forEach(function (el) {
      el.textContent = '0';
      observer.observe(el);
    });
  }

  /* ── Hero animated circuit background ─────────────────────── */
  function initCircuitBackground() {
    var container = document.querySelector('.hero__circuit-bg');
    if (!container || reducedMotion) return;

    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 1400 800');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';

    var teal = '#00A89D';

    // Create circuit topology lines
    var paths = [
      // Horizontal lines
      'M0,100 L400,100 L400,200 L800,200',
      'M200,300 L600,300 L600,400 L1000,400',
      'M100,500 L500,500 L500,600 L900,600',
      'M300,150 L700,150 L700,350 L1100,350',
      'M0,450 L350,450 L350,250 L750,250',
      'M450,550 L850,550 L850,700 L1200,700',
      'M50,650 L400,650 L400,750 L800,750',
      'M600,100 L1000,100 L1000,200 L1400,200',
      'M700,500 L1100,500 L1100,300 L1400,300',
      'M150,700 L550,700 L550,450 L950,450',
    ];

    paths.forEach(function (d, i) {
      var path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', teal);
      path.setAttribute('stroke-width', '1');
      path.setAttribute('opacity', '1');
      svg.appendChild(path);
    });

    // Add circuit nodes (circles)
    var nodes = [
      [400, 100], [400, 200], [800, 200],
      [600, 300], [600, 400], [1000, 400],
      [500, 500], [500, 600], [900, 600],
      [700, 150], [700, 350], [1100, 350],
      [350, 450], [350, 250], [750, 250],
      [850, 550], [850, 700], [1200, 700],
    ];

    nodes.forEach(function (pos, i) {
      var circle = document.createElementNS(svgNS, 'circle');
      circle.setAttribute('cx', String(pos[0]));
      circle.setAttribute('cy', String(pos[1]));
      circle.setAttribute('r', '3');
      circle.setAttribute('fill', teal);
      circle.setAttribute('opacity', '1');
      svg.appendChild(circle);
    });

    container.appendChild(svg);
  }

  /* ── Initialize all animations ────────────────────────────── */
  function init() {
    initFadeIn();
    initCountUp();
    initCircuitBackground();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
