$(document).ready(function () {
  $(window).scroll(function () {
    // sticky nav-menu on scroll script
    if (this.scrollY > 20) {
      $(".nav-menu").addClass("sticky");
    } else {
      $(".nav-menu").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $("#nav-menu .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/nav-menu script
  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Back-End Developer", "Latte Art Artist", "Fitness Trainer","Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Back-End Developer", "Dreamer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const themeButton = document.getElementById('theme-button');
  let anchors = document.querySelectorAll('#contact a');
  let skills_card = document.querySelectorAll('.skills-card');
  const body = document.body;
  let isDarkTheme = localStorage.getItem('theme') === 'dark';

  function toggleTheme() {
      isDarkTheme = !isDarkTheme;
      body.classList.toggle('dark-theme');

      if (isDarkTheme) {
          themeButton.classList.remove('uil-moon');
          themeButton.classList.add('uil-sun');
          document.body.style.backgroundColor="#333";
          document.body.style.color="white";
          skills_card.forEach(card => {
            card.style.borderColor = 'white';
          });        
          anchors.forEach(element => {
            element.style.color="white"
          });
          localStorage.setItem('theme', 'dark');
      } else {
          themeButton.classList.remove('uil-sun');
          themeButton.classList.add('uil-moon');
          document.body.style.backgroundColor="#f2f2f2";
          document.body.style.color="black";
          anchors.forEach(element => {
            element.style.color="black"
          });
          skills_card.forEach(card => {
            card.style.borderColor = 'black';
          });
          localStorage.setItem('theme', 'light');
      }
  }

  themeButton.addEventListener('click', toggleTheme);

  if (isDarkTheme) {
      toggleTheme(); // Apply dark theme if user previously selected it
  }
});


document.getElementById('theme-button').addEventListener('click', function(event) {
  event.preventDefault();
  // Add your theme change logic here
});
