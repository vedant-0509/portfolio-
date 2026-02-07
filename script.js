const main = document.querySelector("main")
const cursor = document.querySelector(".cursor")
const head = document.querySelector(".head")

const moveX = gsap.quickTo(cursor, "x", {
  duration: 0.6,
  ease: "power3.out"
})

const moveY = gsap.quickTo(cursor, "y", {
  duration: 1.2,
  ease: "power3.out"
})

main.addEventListener("mousemove", (e) => {
  moveX(e.clientX - cursor.offsetWidth / 2)
  moveY(e.clientY - cursor.offsetHeight / 2)
})

head.addEventListener("mouseenter", () => {
  cursor.style.opacity = "0"
})

head.addEventListener("mouseleave", () => {
  cursor.style.opacity = "1"
})
