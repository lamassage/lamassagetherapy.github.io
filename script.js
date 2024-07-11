document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Why Choose Me Slideshow
    const slides = document.querySelectorAll('#why-choose-me .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.querySelector('p').classList.add('fade-in-text');
                slide.querySelector('p').classList.remove('fade-out-text');
            } else {
                slide.classList.remove('active');
                slide.querySelector('p').classList.remove('fade-in-text');
                slide.querySelector('p').classList.add('fade-out-text');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    }

    // Automatic transition
    setInterval(nextSlide, 6000); // Change slide every 4 seconds

    // Form Validation
    const contactForm = document.querySelector('form[action="submit_form.php"]');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        if (name && validateEmail(email) && validatePhone(phone) && message) {
            alert('Form submitted successfully!');
            // Here you can add the code to actually submit the form
            this.submit();
        } else {
            alert('Please fill in all fields correctly.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    }

    // Testimonials Slideshow
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.add('active');
                testimonial.classList.remove('fade-out');
            } else {
                testimonial.classList.remove('active');
                testimonial.classList.add('fade-out');
            }
        });
    }

    // Automatically transition testimonials
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial < testimonials.length - 1) ? currentTestimonial + 1 : 0;
        showTestimonial(currentTestimonial);
    }

    setInterval(nextTestimonial, 4000); // Change testimonial every 4 seconds

    // Sports Massage Benefits Slideshow
    const benefits = document.querySelectorAll('.sports-massage-benefits .benefit');
    let currentBenefit = 0;

    function showBenefit(index) {
        benefits.forEach((benefit, i) => {
            if (i === index) {
                benefit.classList.add('active');
            } else {
                benefit.classList.remove('active');
            }
        });
    }

    function nextBenefit() {
        currentBenefit = (currentBenefit < benefits.length - 1) ? currentBenefit + 1 : 0;
        showBenefit(currentBenefit);
    }

    // Automatic transition for sports massage benefits
    setInterval(nextBenefit, 10000); // Change benefit every 5 seconds
});
