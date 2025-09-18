
  window.onload = function() {
    alert("I am working on this website.YET IT IS NOT COMPLETE 🚧");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".phone-menu h1");
    const menu = document.querySelector(".phone-menu ul");
    const closeBtn = document.querySelector(".phone-menu .close-btn");

    hamburger.addEventListener("click", () => {
      menu.classList.add("active"); // open
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove("active"); // close
    });
  });


var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x+"px"
    blur.style.top=dets.y+"px"
})

var typed = new Typed('#element', {
            strings: ['web developer'],
            typeSpeed: 50,
            loop: true,         // keeps repeating
            backDelay: 3000  
        });


// Select all sections + about
const elements = document.querySelectorAll('section, .about');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));


// Owl Carousel for Skills Section
jQuery(function ($) {
  $(".skills.owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    items: 2,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 4 },
      1850: { items: 5 }
    }
  });

  // Smooth scroll for menu links
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top - 50
        },
        800
      );
    }
  });
});

// Get elements
const popup = document.getElementById("popup");
const openBtn = document.querySelector(".open-popup");
const closeBtn = document.querySelector(".close");

// Open popup on h3 click
openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Close popup on "x" click
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup if clicked outside
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});





