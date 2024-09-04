import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxImageProps {
  src: string
  alt: string
}

export function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 object-cover w-full h-full"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
  )
}
