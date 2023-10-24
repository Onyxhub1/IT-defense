const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const body = document.querySelector('body')
const clientMail = document.querySelector('#email')
const tl = gsap.timeline()

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("rotate");
  body.classList.toggle('no-scroll')
});

function sendEmail(){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "adebowaleademuyiwa12@gmail.com",
    Password: "8BF37C2E9466540C0A1C327A1B11FF208D47",
    To: "adebowaleademuyiwa12@gmail.com",
    From: clientMail.value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

tl.fromTo(
  ".hero-sec",
  0.8,
  { width: 0 },
  { width: "100%", ease: Power4.easeInOut }
)
  .fromTo(
    ".c2",
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