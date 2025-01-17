// Header Scroll fixed
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav")
  // console.log(nav)
  if (window.scrollY > 500) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})

// Button Dark-Light
const toggle = document.querySelector(".btn_dark-light")
const body = document.querySelector("body")

toggle.onclick = () => {
  toggle.classList.toggle("active")
  body.classList.toggle("themes-light")
}

// Mobile Menu
const mobile = document.querySelector(".mobile-menu")

mobile.onclick = () => {
  const navbar = document.querySelector(".navbar-links")
  navbar.classList.toggle("active")
  mobile.classList.toggle("active")
}
