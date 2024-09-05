import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import {
  BuildingOffice2Icon,
  HomeIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { useParallax } from '../hooks/useParallax';
import { Section } from './Section';
import { OscillateBackground } from './OscillateBackground';
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
import { ServiceCard } from './ServiceCard';
import { ProjectCard } from './ProjectCard';
import { ContactItem } from './ContactItem';

export default function LandingPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect for hero section
  const { ref: parallaxRef, y: parallaxY } = useParallax(0.3);
  const yTransform = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  // State to store window width
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen bg-black">
        <OscillateBackground />
        <div
          ref={parallaxRef}
          style={{
            transform: `translateY(${prefersReducedMotion ? '0' : parallaxY}px)`,
          }}
          className="relative z-10 flex flex-col items-center justify-center h-screen"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Welcome to XMC Construction
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={slideUp}
          >
            Building the future, one project at a time. Your trusted partner in construction.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <Section id="services" className="bg-gray-900 py-20">
        <motion.div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-12"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            ref={ref}
          >
            Our Services
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-3">
            <ServiceCard
              icon={<BuildingOffice2Icon className="w-16 h-16" />}
              title="Residential Construction"
              description="We offer high-quality residential construction services, from planning to execution."
              variant={scaleUp}
            />
            <ServiceCard
              icon={<TruckIcon className="w-16 h-16" />}
              title="Commercial Construction"
              description="Experienced in delivering large-scale commercial projects with precision and quality."
              variant={bounce}
            />
            <ServiceCard
              icon={<WrenchScrewdriverIcon className="w-16 h-16" />}
              title="Renovation & Repair"
              description="Our team handles renovation projects with great attention to detail, ensuring satisfaction."
              variant={rotateAndScale}
            />
          </div>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-black py-20">
        <motion.div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-12"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            ref={ref}
          >
            Our Projects
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-3">
            <ProjectCard
              image="/images/project1.jpg"
              title="Luxury Villa"
              description="A stunning luxury villa built to perfection."
              variant={flip}
            />
            <ProjectCard
              image="/images/project2.jpg"
              title="Office Building"
              description="A modern office building designed for efficiency."
              variant={slideInRight}
            />
            <ProjectCard
              image="/images/project3.jpg"
              title="Industrial Warehouse"
              description="A large-scale warehouse built to support industrial needs."
              variant={zoomIn}
            />
          </div>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gray-900 py-20">
        <motion.div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-12"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            ref={ref}
          >
            Contact Us
          </motion.h2>

          <ul className="space-y-8">
            <ContactItem icon={<PhoneIcon className="w-8 h-8" />} text="+1 123 456 7890" />
            <ContactItem icon={<EnvelopeIcon className="w-8 h-8" />} text="info@xmcconstruction.com" />
            <ContactItem icon={<MapPinIcon className="w-8 h-8" />} text="1234 Main Street, Anahawan, Southern Leyte" />
          </ul>
        </motion.div>
      </Section>
    </div>
  );
}
