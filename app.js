alert('hello World')
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// GSAP Horizontal Scroll without sticky div

let moveCardBlock = 265

switch (true) {
  case window.innerWidth > 1200:
    moveCardBlock = 265
    break

  case window.innerWidth > 768 && window.innerWidth < 990:
    moveCardBlock = 415
    break

  case window.innerWidth > 320 && window.innerWidth < 468:
    moveCardBlock = 1050
    break

  default:
    // Default action if none of the cases match
    break
}

let tl = gsap.timeline()

tl.to('.ab_awards_card-wrap', {
  duration: 1,
  xPercent: -moveCardBlock,
  ease: 'Power1.in',
})

ScrollTrigger.create({
  trigger: '.ab_awards',
  animation: tl,
  start: 'top 0',
  end: '+=4000px',
  pin: true,
  scrub: true,
  pinSpacing: true,
})
