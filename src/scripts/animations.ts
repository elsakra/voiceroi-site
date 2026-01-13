import { animate, inView, scroll } from '@motionone/dom';

// Initialize animations when DOM is loaded
function initAnimations() {
  // Animate elements on scroll
  const animateElements = document.querySelectorAll<HTMLElement>('.animate-on-scroll');
  
  animateElements.forEach((element, index) => {
    inView(element, () => {
      animate(
        element,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.8, delay: index * 0.1, easing: 'ease-out' }
      );
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector<HTMLElement>('#navbar');
  if (navbar) {
    scroll(({ y }) => {
      if (y.current > 100) {
        navbar.classList.add('backdrop-blur-md', 'bg-white/90', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-white/90', 'shadow-lg');
        navbar.classList.add('bg-transparent');
      }
    });
  }

  // Button hover animations
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Card hover animations
  const cards = document.querySelectorAll<HTMLElement>('.card-hover');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      animate(card, { y: -8, scale: 1.02 }, { duration: 0.3 });
    });
    
    card.addEventListener('mouseleave', () => {
      animate(card, { y: 0, scale: 1 }, { duration: 0.3 });
    });
  });

  // Stagger animation for feature cards
  const featureCards = document.querySelectorAll<HTMLElement>('.feature-card');
  featureCards.forEach((card, index) => {
    inView(card, () => {
      animate(
        card,
        { opacity: [0, 1], y: [50, 0], scale: [0.9, 1] },
        { duration: 0.6, delay: index * 0.15, easing: 'ease-out' }
      );
    });
  });

  // Stats counter animation
  const statNumbers = document.querySelectorAll<HTMLElement>('.stat-number');
  statNumbers.forEach(stat => {
    inView(stat, () => {
      const target = parseInt(stat.textContent || '0');
      animate(
        (progress) => {
          stat.textContent = Math.round(progress * target).toString();
        },
        { duration: 2, easing: 'ease-out' }
      );
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

export { initAnimations };