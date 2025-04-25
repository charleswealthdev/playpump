document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('.nav-link').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        // Close menu on mobile after click
        if (window.innerWidth < 768) {
          document.querySelector('.nav-menu').classList.remove('active');
          document.querySelector('.hamburger').classList.remove('active');
        }
      });
    });
  
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
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
  
    // Navbar link tilt effect (disabled on touch devices)
    if (window.matchMedia('(hover: hover)').matches) {
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
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
  });