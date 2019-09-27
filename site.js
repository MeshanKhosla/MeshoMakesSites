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
    // Buger Animation
    hamburger.classList.toggle("toggle");
  });
};

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
