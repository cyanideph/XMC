import { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
}

export const rotate: Variants = {
  hidden: { rotate: -90, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { duration: 0.8 } },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}

export const flip: Variants = {
  hidden: { rotateY: 180, opacity: 0 },
  visible: { rotateY: 0, opacity: 1, transition: { duration: 0.8 } },
}

export const bounce: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: [0, -15, 0], 
    opacity: 1, 
    transition: { duration: 0.8, bounce: 0.5, times: [0, 0.5, 1] } 
  },
}

export const staggeredFade: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.3, 
      duration: 0.8 
    } 
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export const zoomIn: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
}

export const rotateAndScale: Variants = {
  hidden: { rotate: -180, scale: 0.8, opacity: 0 },
  visible: { rotate: 0, scale: 1, opacity: 1, transition: { duration: 0.8 } },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}

export const flipX: Variants = {
  hidden: { rotateX: 90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1, transition: { duration: 0.8 } },
}
