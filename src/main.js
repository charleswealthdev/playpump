document.addEventListener('DOMContentLoaded', () => {
    try {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');
  
      if (!hamburger || !navMenu) {
        console.error('Hamburger or nav-menu element not found');
        return;
      }
  
      // Hamburger menu toggle
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
  
      // Smooth scrolling and close menu on link click
      document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
          if (window.innerWidth < 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
          }
        });
      });
  
      // Prevent iPhone zooming
      document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      }, { passive: false });
  
      document.addEventListener('gesturestart', (e) => {
        e.preventDefault();
      });
  
      // Navbar link tilt effect (desktop only)
      if (window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            link.style.transform = `perspective(500px) rotateX(${y * 10}deg) rotateY(${x * -10}deg) translateY(-0.5vw)`;
          });
          link.addEventListener('mouseleave', () => {
            link.style.transform = 'perspective(500px) rotateX(0) rotateY(0) translateY(0)';
          });
        });
      }
    } catch (error) {
      console.error('Error initializing hamburger menu:', error);
    }
  });