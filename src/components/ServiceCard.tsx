import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
export function ServiceCard({
  icon,
  title,
  description,
  variant,
}: {
  icon: React.ReactNode;
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
      className="bg-black p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300"
    >
      <div className="text-red-500 mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}
