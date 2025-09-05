
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { Draggable } from 'gsap/Draggable'
import { Flip } from 'gsap/Flip'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(
  ScrollTrigger,
  TextPlugin,
  MotionPathPlugin,
  Draggable,
  Flip,
  ScrollToPlugin
)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      gsap,
      ScrollTrigger,
      TextPlugin,
      MotionPathPlugin,
      Draggable,
      Flip,
      ScrollToPlugin
    }
  }
})

