const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const missionContainer = document.querySelector('.mission')
const mission = document.querySelector('.mission-word')
const visionContainer = document.querySelector('.vision-container')
const vision = document.querySelector('.vision')
const firstPlus = document.querySelector('.plus1')
const secondPlus = document.querySelector('.plus2')
const body = document.querySelector('body')
const tl = gsap.timeline()


burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("rotate");
  body.classList.toggle('no-scroll')
});

vision.addEventListener('click', () => {
    visionContainer.classList.toggle('reverse')
    secondPlus.classList.toggle('times')
})

mission.addEventListener('click', () => {
    missionContainer.classList.toggle('reverse')
    firstPlus.classList.toggle("times");
})

tl.fromTo(
  ".about-img",
  0.9,
  { opacity: 0, y: "70px" },
  { opacity: 1, y: 0, ease: "bounce" }
)
  .fromTo(
    ".about-content",
    0.6,
    { opacity: 0, x: "-50px" },
    { opacity: 1, x: 0 },
    "-=.6"
  )
  .fromTo(
    "header a",
    0.6,
    { opacity: 0 },
    { opacity: 1, stagger: 0.16 },
    "-=.5"
  );