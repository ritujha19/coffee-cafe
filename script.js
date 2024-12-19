const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const openBtn = document.querySelector("#menu-open-button");
const closeBtn = document.querySelector("#menu-close-button");
const phone = document.getElementById("booking-phone");

openBtn.addEventListener("click",() => {
  document.body.classList.toggle("show-mobile-menu");
});

closeBtn.addEventListener("click",() => openBtn.click());

navLinks.forEach(link => {
link.addEventListener("click",()=>
  openBtn.click());
});

// booking form submission
document.getElementById("book-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name =document.getElementById("booking-name").value.trim();
  const email =document.getElementById("booking-email").value.trim();
  
  const date =document.getElementById("booking-date").value;
  const time =document.getElementById("booking-time").value;
  const persons =document.getElementById("booking-persons").value;

  if (name && email && phone && date && time && persons ) {
    alert(`Booking Confirmed!\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nPersons: ${persons}`);
  }
});


//contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (name && email && message) {
    alert(` Thank you for sending message!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    cssMode: true,
    grabCursor: true,
    spaceBetween : 15,
    watchOverflow: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

    // Responsive breakpoints 
    breakpoints: 'window',
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    },
  });

// Initialize the intl-tel-input library
  window.intlTelInput(phone, {
    initialCountry: "de", // Default country
    separateDialCode: true, // Display country code separately
    preferredCountries: ["de", "us", "in"], // Preferred countries at the top
    });