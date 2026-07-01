// ==========================================
// CUSTOM PREMIUM ALERT MODAL OVERRIDE
// ==========================================
window.alert = function(message) {
    // Create elements
    const overlay = document.createElement('div');
    overlay.className = 'custom-alert-overlay';
    
    overlay.innerHTML = `
        <div class="custom-alert-box">
            <div class="custom-alert-icon">
                <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div class="custom-alert-message">${message}</div>
            <button class="custom-alert-btn">OK</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Trigger fade-in
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
    
    // Focus button
    const btn = overlay.querySelector('.custom-alert-btn');
    btn.focus();
    
    const closeAlert = () => {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
        }, 200);
    };
    
    btn.addEventListener('click', closeAlert);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeAlert();
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // STICKY HEADER & ACTIVE NAV LINK HIGHLIGHT
    // ==========================================
    const header = document.querySelector('.header');
    const scrollThreshold = 20;

    const handleScroll = () => {
        if (!header) return;
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Set Active State based on current filename
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (page === href || (page === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ==========================================
    // MOBILE NAV DRAWER IMPLEMENTATION
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksList = document.querySelector('.nav-links');
    
    // Create overlay element dynamically if it doesn't exist
    let overlay = document.querySelector('.drawer-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'drawer-overlay';
        document.body.appendChild(overlay);
    }

    const toggleMenu = () => {
        const isOpen = menuToggle.classList.toggle('active');
        navLinksList.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (isOpen) {
            document.body.classList.add('menu-open');
            document.documentElement.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
        }
    };

    const closeMenu = () => {
        menuToggle.classList.remove('active');
        navLinksList.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.documentElement.classList.remove('menu-open');
    };

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Auto-close menu on drawer navlink click (for mobile layout)
    const mobileLinks = document.querySelectorAll('.nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ==========================================
    // SCROLL REVEAL ANIMATIONS (IntersectionObserver)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after revealing to prevent repetitive animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
