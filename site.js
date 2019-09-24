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

const app = () => {
  navSlide();
};

app();
