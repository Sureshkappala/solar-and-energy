document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // STATS COUNT-UP ANIMATION
    // ==========================================
    const counterElements = document.querySelectorAll('.stat-number');
    
    const countUp = (element) => {
        const target = parseInt(element.getAttribute('data-target'), 10);
        const duration = 2000; // 2 seconds
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.getAttribute('data-suffix') || '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.getAttribute('data-suffix') || '');
            }
        }, stepTime);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(el => counterObserver.observe(el));

    // ==========================================
    // ENERGY SAVINGS CALCULATOR (services.html)
    // ==========================================
    const billSlider = document.getElementById('billSlider');
    const hoursSlider = document.getElementById('hoursSlider');
    const billVal = document.getElementById('billVal');
    const hoursVal = document.getElementById('hoursVal');
    
    const capacityVal = document.getElementById('capacityVal');
    const savingsVal = document.getElementById('savingsVal');
    const carbonVal = document.getElementById('carbonVal');

    if (billSlider && hoursSlider) {
        const updateCalculator = () => {
            const bill = parseFloat(billSlider.value);
            const hours = parseFloat(hoursSlider.value);

            billVal.textContent = `$${bill}`;
            hoursVal.textContent = `${hours} hrs`;

            // Formulas for savings calculations
            // Recommended Solar Capacity (kW)
            const capacity = (bill * 0.075) / hours;
            // Est. Annual Savings ($)
            const savings = bill * 12 * 0.85;
            // CO2 reduction (Metric Tons / Year)
            const carbon = capacity * 1.45;

            capacityVal.textContent = `${capacity.toFixed(1)} kW`;
            savingsVal.textContent = `$${Math.round(savings).toLocaleString()}`;
            carbonVal.textContent = `${carbon.toFixed(1)} Tons`;
        };

        billSlider.addEventListener('input', updateCalculator);
        hoursSlider.addEventListener('input', updateCalculator);
        updateCalculator(); // Run once initially
    }

    // ==========================================
    // ACCORDION FAQ (faq.html)
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(el => {
                el.classList.remove('active');
                el.querySelector('.accordion-body').style.maxHeight = null;
            });

            // If not active, open clicked item
            if (!isActive) {
                item.classList.add('active');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });

    // ==========================================
    // PORTFOLIO FILTERING (projects.html)
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ==========================================
    // TESTIMONIALS SLIDER
    // ==========================================
    const sliderDotsContainer = document.querySelector('.slider-dots');
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.testimonial-slide');

    if (slidesWrapper && slides.length > 0) {
        let currentSlideIndex = 0;
        let slideInterval;

        // Generate dot elements dynamically based on slider size
        sliderDotsContainer.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(idx));
            sliderDotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.slider-dot');

        const goToSlide = (index) => {
            currentSlideIndex = index;
            slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
            
            dots.forEach(d => d.classList.remove('active'));
            dots[index].classList.add('active');
            
            resetAutoplay();
        };

        const nextSlide = () => {
            const nextIdx = (currentSlideIndex + 1) % slides.length;
            goToSlide(nextIdx);
        };

        const startAutoplay = () => {
            slideInterval = setInterval(nextSlide, 5000); // Rotate slide every 5 seconds
        };

        const resetAutoplay = () => {
            clearInterval(slideInterval);
            startAutoplay();
        };

        startAutoplay();
    }

    // ==========================================
    // CONTACT FORM VALIDATION & POPUP
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all required fields.');
                return;
            }

            // Mock submission success modal dialog
            const formCard = contactForm.parentElement;
            const originalContent = formCard.innerHTML;
            
            formCard.innerHTML = `
                <div style="text-align: center; padding: 40px 0;">
                    <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(16, 185, 129, 0.1); color: var(--accent-emerald); display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 24px; box-shadow: var(--neon-glow-emerald);">
                        <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 12px; color: #fff;">Message Sent Successfully!</h3>
                    <p style="color: var(--text-desc); margin-bottom: 30px; font-size: 15px;">Thank you for contacting us, ${name}. Our energy consultants will reach out to you within 24 hours.</p>
                    <button id="btnResetForm" class="btn btn-primary" style="margin: 0 auto;">Send Another Message</button>
                </div>
            `;

            document.getElementById('btnResetForm').addEventListener('click', () => {
                formCard.innerHTML = originalContent;
                // Re-bind listener recursively
                document.location.reload();
            });
        });
    }
});
