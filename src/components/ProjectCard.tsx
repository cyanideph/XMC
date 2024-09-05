import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { 
  fadeIn, 
  slideUp, 
  scaleUp, 
  rotate, 
  slideInRight, 
  flip, 
  bounce, 
  staggeredFade, 
  slideDown, 
  zoomIn, 
  rotateAndScale, 
  slideInLeft, 
  flipX 
} from '../utils/animations';
export function ProjectCard({
  image,
  title,
  description,
  variant,
}: {
  image: string;
  title: string;
  description: string;
  variant: any;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      animate={inView && !prefersReducedMotion ? 'visible' : 'hidden'}
      variants={variant}
      className="bg-black rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
    >
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
