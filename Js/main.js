// Responsive nav toggle
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

const messages = [
    "Relax. Rejuvenate. Renew.",
    "Experience the ultimate spa therapy.",
    "Your wellness is our priority.",
    "Let your body and mind unwind.",
    "Pampering you, naturally."
  ];
  
  let index = 0;
  const messageEl = document.getElementById("hero-message");
  
  setInterval(() => {
    index = (index + 1) % messages.length;
    messageEl.textContent = messages[index];
  }, 3000);



    // Toggle card description
const toggles = document.querySelectorAll('.card-toggle');

toggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    const desc = btn.previousElementSibling;
    const isOpen = desc.style.maxHeight === '200px';
    desc.style.maxHeight = isOpen ? '60px' : '200px';
    btn.textContent = isOpen ? 'Learn More' : 'Show Less';
  });
});



// Simple contact form validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting Spa Bliss! We'll be in touch shortly.");
  contactForm.reset();
});


// Testimonial slider logic
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}



// Auto-slide every 6 seconds
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 6000);

// Newsletter form validation
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector("input[type='email']");
    const message = document.getElementById("newsletter-msg");
  
    if (emailInput.value.trim() === "") {
      message.textContent = "Please enter a valid email.";
      message.style.color = "yellow";
    } else {
      message.textContent = "Thank you for subscribing!";
      message.style.color = "#e8f9f1";
      this.reset();
    }
  });
    
