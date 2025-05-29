/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */

// Navigation and basic effects
window.addEventListener('DOMContentLoaded', event => {
  const navbarShrink = () => {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) return;
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

// Dark mode toggle
const themeToggle = document.getElementById("themeSwitcher");
if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// "Show more" toggle
function toggleMore(id) {
  const moreText = document.getElementById(id);
  moreText.classList.toggle("hidden");
}

// Fade-in animation using IntersectionObserver
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 1s forwards";
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".text, .image").forEach(el => {
  el.style.opacity = 0;
  observer.observe(el);
});

// AJAX interactions and jQuery effects
$(document).ready(function () {
  // Toggle and load Quote content
  $("#toggleTextBtn").click(function(){
    $("#quoteBox").slideToggle("slow", function () {
      if ($(this).is(":visible") && $(this).html().trim() === "") {
        $.get("quote.txt", function (data) {
          $("#quoteBox").html(data);
        });
      }
    });
  });

  // Toggle and load Joke content
  $("#toggleJokeBtn").click(function(){
    $("#jokeBox").slideToggle("slow", function () {
      if ($(this).is(":visible") && $(this).html().trim() === "") {
        $.get("joke.txt", function (data) {
          $("#jokeBox").html(data);
        });
      }
    });
  });

  // Toggle image fade
  $("#toggleImageBtn").click(function(){
    $("#funnyImage").fadeToggle("slow");
  });

  // Toggle additional text block using the button with class "toggle-text-btn"
  $(".toggle-text-btn").click(function(){
    $(this).next(".content-box").slideToggle("slow");
  });

  if (window.location.pathname.includes("smart.html")) {
    $("#themeSwitcher").change(function () {
      $("body").toggleClass("dark-mode");
    });
  }
});


