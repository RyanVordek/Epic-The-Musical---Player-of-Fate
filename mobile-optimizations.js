/**
 * Mobile Optimizations for EPIC Player
 * Otimizacoes especificas para dispositivos moveis
 */

class MobileOptimizer {
  constructor() {
    this.isMobile = this.detectMobile();
    this.isTouch = this.detectTouch();
    this.init();
  }

  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  detectTouch() {
    return (
      ('ontouchstart' in window) || 
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0)
    );
  }

  init() {
    if (this.isMobile) {
      this.optimizeViewport();
      this.optimizeControls();
      this.optimizePerformance();
      this.handleOrientation();
    }
  }

  optimizeViewport() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.body.classList.add('is-mobile');
    if (this.isTouch) document.body.classList.add('is-touch');
  }

  optimizeControls() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {
      btn.addEventListener('touchstart', () => {
        btn.style.transform = 'scale(0.95)';
      });
      btn.addEventListener('touchend', () => {
        btn.style.transform = '';
      });
    });

    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach((slider) => {
      slider.addEventListener('touchstart', (e) => {
        e.target.style.zIndex = '10';
      });
      slider.addEventListener('touchend', (e) => {
        e.target.style.zIndex = '';
      });
    });
  }

  optimizePerformance() {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      document.body.classList.add('reduce-motion');
    }
  }

  handleOrientation() {
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }, 100);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MobileOptimizer();
});
