import { useTransform, useScroll, MotionValue } from 'framer-motion'
import { useRef } from 'react'

export function useParallax(distance: number = 300): [React.RefObject<HTMLDivElement>, MotionValue<number>] {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, distance])
  return [ref, y]
}
