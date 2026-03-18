  document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            const header = document.getElementById('hed');
            
            // Mobile menu toggle
            if (hamburger) {
                hamburger.addEventListener('click', function(e) {
                    e.stopPropagation();
                    hamburger.classList.toggle('active');
                    navMenu.classList.toggle('active');
                });
            }
            
            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
            
            // Close menu when clicking a link
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
            
            // Smooth scrolling
            const scrollToElement = (element) => {
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
            
            // Navigation buttons
            document.getElementById('home')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            document.getElementById('about')?.addEventListener('click', () => scrollToElement(document.getElementById('info')));
            document.getElementById('btn-sec-th')?.addEventListener('click', () => scrollToElement(document.getElementById('sec-th')));
            document.getElementById('con-a')?.addEventListener('click', () => scrollToElement(document.getElementById('con')));
            document.getElementById('btn-last')?.addEventListener('click', () => scrollToElement(document.getElementById('last')));
            document.getElementById('btn-info')?.addEventListener('click', () => scrollToElement(document.getElementById('info')));
            document.getElementById('btn-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            
            // Header shadow on scroll
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                    header.style.top = '10px';
                } else {
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    header.style.top = '15px';
                }
            });
            
            // Lazy loading images
            document.querySelectorAll('img').forEach(img => {
                img.loading = 'lazy';
            });
            
            // Close menu on resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
            
            // Reduced motion preference
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.querySelectorAll('*').forEach(el => {
                    el.style.animation = 'none';
                });
            }
        });