try {
  GitHubCalendar(".calendar", "akhtaransari");
  GitHubCalendar(".calendar", "akhtaransari", { responsive: true });
} catch (error) {
  console.log(error);
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".nav-menu").addClass("sticky");
    } else {
      $(".nav-menu").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  $("#nav-menu .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["Full Stack Web Developer", "Manual Quality Anylist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Full Stack Web Developer", "Manual Quality Anylist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

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


const themeButton = document.getElementById('theme-button');
let anchors = document.querySelectorAll('#contact a');
let skills_card = document.querySelectorAll('.skills-card');
const body = document.body;
let isDarkTheme = localStorage.getItem('theme');

// Initial theme setup
if (isDarkTheme === 'dark') {
    darkTheme();
} else {
    lightTheme();
}

themeButton.addEventListener('click', () => {
    isDarkTheme = localStorage.getItem('theme'); // Update theme setting
    if (isDarkTheme === 'dark') {
        lightTheme(); // Toggle to light theme
    } else {
        darkTheme(); // Toggle to dark theme
    }
});




function darkTheme(){
        body.classList.add('dark-theme');
        themeButton.classList.remove('uil-moon');
        themeButton.classList.add('uil-sun');
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";
        skills_card.forEach(card => {
            card.style.borderColor = 'white';
        });
        anchors.forEach(element => {
            element.style.color = "white";
        });
        localStorage.setItem('theme', 'dark');
}

function lightTheme() {
        body.classList.remove('dark-theme');
        themeButton.classList.remove('uil-sun');
        themeButton.classList.add('uil-moon');
        document.body.style.backgroundColor = "#f2f2f2";
        document.body.style.color = "black";
        anchors.forEach(element => {
            element.style.color = "black";
        });
        skills_card.forEach(card => {
            card.style.borderColor = 'white';
        });
        localStorage.setItem('theme', 'light');
}


document.getElementById('theme-button').addEventListener('click', function(event) {
  event.preventDefault();
});
