const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const tl = gsap.timeline()

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("rotate");
  body.classList.toggle("no-scroll");
});

tl.fromTo(".first", 0.8, { width: 0 }, { width: "100%", ease: Power4.easeInOut })
  .fromTo(
    ".hero-section",
    0.7,
    { opacity: 0, y: "-40px" },
    { opacity: 1, y: 0, ease: "bounce" }
  )
  .fromTo(
    "header a",
    0.6,
    { opacity: 0 },
    { opacity: 1, stagger: 0.16 },
    "-=.5"
  );