// Navigation
const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.getElementById("check-class");
  const navLinks = document.querySelectorAll(".nav-links li");
  //   Toggle Nav

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //   Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 +
          2}s`;
      }
    });
    // Burger Animation
    hamburger.classList.toggle("toggle");
  });
};

// Nav scroll
let div = $(".nav");
let start = $(div).offset().top;
let background =
  "linear-gradient(155deg, rgba(110,107,107,1) 14%, rgba(20,22,22,1) 78%)";

$.event.add(window, "scroll", function() {
  let p = $(window).scrollTop();
  $(div).css("position", p > start ? "fixed" : "static");
  $(div).css("top", p > start ? "0px" : "");
  $(div).css("right", p > start ? "20px" : "");
  $(div).css("background", p > start ? background : "");
  $(div).css("z-index", p > start ? "30" : "");
});

// Animation

const animation = () => {
  const businessText = document.querySelector("#business-text");
  const websiteText = document.querySelector("#website-text");
  const wayText = document.querySelector("#way-text");
  const laptopImage = document.querySelector(".laptop-image");

  const tl = new TimelineMax();
  tl.fromTo(laptopImage, 5, { opacity: "0" }, { opacity: "1" })
    .fromTo(businessText, 1, { opacity: "0" }, { opacity: "1" }, "-=4")
    .fromTo(websiteText, 1, { opacity: "0" }, { opacity: "1" }, "-=3")
    .fromTo(wayText, 1, { opacity: "0" }, { opacity: "1" }, "-=2");
};

const app = () => {
  navSlide();
  animation();
};

app();
