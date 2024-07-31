document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for fade-in effect
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
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('fade-out');
            } else {
                slide.classList.remove('active');
                slide.classList.add('fade-out');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    }

    // Automatically switch slides every 5 seconds
    setInterval(nextSlide, 5000);

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

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial < testimonials.length - 1) ? currentTestimonial + 1 : 0;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial > 0) ? currentTestimonial - 1 : testimonials.length - 1;
        showTestimonial(currentTestimonial);
    }

    document.getElementById('next').addEventListener('click', nextTestimonial);
    document.getElementById('prev').addEventListener('click', prevTestimonial);
});
