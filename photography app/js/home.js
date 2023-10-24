const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const body = document.querySelector('body')
const tl = gsap.timeline()


burger.addEventListener('click', () => {
    nav.classList.toggle('active')
    burger.classList.toggle('rotate')
    body.classList.toggle('no-scroll')
})

tl.fromTo(".s1", 0.5, { width: 0 }, { width: "100%", ease: Power4.easeInOut })
  .fromTo(
    ".hero-section",
    0.5,
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

gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.about-heading h3', .5, 
    {opacity: 0, y: '100px'}, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.about-heading',
            start: 'top 70%',
            end: 'bottom center',
        }
  })

gsap.fromTo('.about-heading p', .5, 
    {opacity: 0, y: '100px'}, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.about-heading',
            start: 'top 65%',
            end: 'bottom center',
        }
    })

gsap.fromTo('.about-heading a', .5, 
    {opacity: 0, y: '100px'}, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.about-heading',
            start: 'top 60%',
            end: 'bottom center',
        }
    })

gsap.fromTo(
  ".pic",
  1.6,
  { opacity: 0, y: "100px" },
  {
    opacity: 1,
    y: 0,
    stagger: .2,
    ease: 'elastic',
    scrollTrigger: {
      trigger: ".portfolio-sec",
      start: "top 50%",
      end: "bottom center",
    },
  }
);

gsap.fromTo(
  ".portfolio-sec a",
  .5,
  { opacity: 0, y: "80px" },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".portfolio-sec",
      start: "50% 40%",
      end: "bottom center",
    },
  }
);

gsap.fromTo(
  ".seen",
  .5,
  { opacity: 0, x: "-80px" },
  {
    opacity: 1,
    x: 0,
    stagger: .15,
    scrollTrigger: {
      trigger: ".portfolio-sec",
      start: "50% 20%",
      end: "bottom center",
    },
  }
);
