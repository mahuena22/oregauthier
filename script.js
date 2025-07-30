// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = 80; // Account for fixed header
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });
    
    // Header background on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
            header.classList.remove('shadow-sm');
        } else {
            header.classList.add('shadow-sm');
            header.classList.remove('shadow-lg');
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe project cards and other elements
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
    });
    
    // Form submission enhancement
    const contactForm = document.querySelector('form[action*="mailto"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!nom || !email || !message) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs requis.');
                return;
            }
            
            // Update mailto link with form data
            const subject = encodeURIComponent(`Contact de ${nom}`);
            const body = encodeURIComponent(`Nom: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`);
            this.action = `mailto:oreiboukoun@example.com?subject=${subject}&body=${body}`;
        });
    }
    
    // Add loading states to buttons
    const buttons = document.querySelectorAll('button, a[href*="mailto"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit' || this.href.includes('mailto:')) {
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    });
    
    // Scroll to top functionality
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'fixed bottom-8 right-8 bg-wine text-white w-12 h-12 rounded-full shadow-lg hover:bg-wine/90 transition-all duration-300 z-40 opacity-0 pointer-events-none';
    scrollToTopBtn.setAttribute('aria-label', 'Retour en haut');
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.add('opacity-100');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.remove('opacity-100');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effects to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Typing animation for hero section (if needed)
    const heroTitle = document.querySelector('#accueil h1');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.animation = 'fadeInUp 1s ease-out';
        }, 500);
    }
    
});

// Utility function for smooth animations
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll animations
window.addEventListener('scroll', throttle(animateOnScroll, 50));

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
});

// Focus management for better accessibility
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function trapFocus(element) {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    document.addEventListener('keydown', function(e) {
        const isTabPressed = e.key === 'Tab';

        if (!isTabPressed) return;

        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    });
}
