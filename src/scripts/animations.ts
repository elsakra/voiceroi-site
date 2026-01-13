import { animate, inView, stagger } from '@motionone/dom';

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Hero text animation
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    animate(
      heroText,
      { opacity: [0, 1], y: [50, 0] },
      { duration: 1, easing: 'ease-out', delay: 0.2 }
    );
  }

  // Staggered section animations
  const sections = document.querySelectorAll<HTMLElement>('.animate-on-scroll');
  sections.forEach((section, index) => {
    inView(section, () => {
      animate(
        section,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.8, easing: 'ease-out', delay: index * 0.1 }
      );
    });
  });

  // Stats counter animation
  const statsNumbers = document.querySelectorAll<HTMLElement>('.stat-number');
  statsNumbers.forEach((stat) => {
    inView(stat, () => {
      const finalValue = parseInt(stat.textContent || '0');
      animate(
        (progress) => {
          stat.textContent = Math.round(progress * finalValue).toString();
        },
        { duration: 2, easing: 'ease-out' }
      );
    });
  });

  // Button hover animations
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Floating elements
  const floatingElements = document.querySelectorAll<HTMLElement>('.float-animation');
  floatingElements.forEach((element, index) => {
    animate(
      element,
      { y: [-10, 10, -10] },
      { duration: 4 + index, repeat: Infinity, easing: 'ease-in-out' }
    );
  });
});