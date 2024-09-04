'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
import { ParallaxImage } from './ParallaxImage';
import { fadeIn, slideUp } from '../utils/animations';

export default function LandingPage() {
  const [ref, parallaxEffect] = useParallax(300); // Use the hook to get ref and parallaxEffect

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={ref} className="bg-black">
      {/* Hero Section */}
      <Section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/img.jpg"
              alt="Construction site"
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          style={{ transform: `translateY(${parallaxEffect.get()}px)` }} // Apply the parallax effect
        >
          <motion.h1 className="text-6xl font-bold mb-4" variants={slideUp}>
            XMC Construction
          </motion.h1>
          <motion.p className="text-2xl mb-8" variants={slideUp}>
            Building Dreams
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 inline-block"
            variants={slideUp}
          >
            Get a Quote
          </motion.a>
        </motion.div>
      </Section>

      {/* About Us Section */}
      <Section className="py-20 bg-red-900">
        <motion.div className="container mx-auto px-4" style={{ y }}>
          <h2 className="text-5xl font-bold mb-12 text-center text-white">About Us</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
            XMC Construction is a premier construction company based in Anahawan, Southern Leyte. With a legacy of
            excellence and a passion for innovation, we transform architectural visions into stunning realities. Our
            team of expert professionals is dedicated to delivering projects that exceed expectations, on time and
            within budget.
          </p>
        </motion.div>
      </Section>

      {/* Services Section */}
      <Section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ServiceCard
              icon={<HomeIcon className="w-16 h-16 text-red-500" />}
              title="Residential Construction"
              description="Crafting homes that reflect your lifestyle and dreams."
            />
            <ServiceCard
              icon={<BuildingOffice2Icon className="w-16 h-16 text-red-500" />}
              title="Commercial Buildings"
              description="Creating spaces that drive business success and growth."
            />
            <ServiceCard
              icon={<TruckIcon className="w-16 h-16 text-red-500" />}
              title="Infrastructure Development"
              description="Building the foundations for thriving communities."
            />
            <ServiceCard
              icon={<WrenchScrewdriverIcon className="w-16 h-16 text-red-500" />}
              title="Renovation & Remodeling"
              description="Breathing new life into existing structures."
            />
          </div>
        </div>
      </Section>

      {/* Projects Showcase */}
      <Section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-white">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ProjectCard
              image="/images/project1.jpg"
              title="Modern Office Complex"
              description="A state-of-the-art office building in the heart of Anahawan."
            />
            <ProjectCard
              image="/images/project2.jpg"
              title="Luxury Residential Community"
              description="High-end homes with breathtaking views of Southern Leyte."
            />
            <ProjectCard
              image="/images/project3.jpg"
              title="Shopping Center"
              description="A modern shopping destination for the local community."
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-20 bg-red-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-8">Get in Touch</h3>
              <ul className="space-y-6">
                <ContactItem icon={<PhoneIcon className="w-8 h-8 text-red-500" />} text="+63 123 456 7890" />
                <ContactItem icon={<EnvelopeIcon className="w-8 h-8 text-red-500" />} text="info@xmcconstruction.com" />
                <ContactItem
                  icon={<MapPinIcon className="w-8 h-8 text-red-500" />}
                  text="Anahawan, Southern Leyte, Philippines"
                />
              </ul>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-lg bg-gray-800 text-white text-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-lg bg-gray-800 text-white text-lg"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-gray-800 text-white text-lg"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
      className="bg-black p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300"
    >
      <div className="text-red-500 mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ image, title, description }: { image: string; title: string; description: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
      className="bg-black rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
    >
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center space-x-4">
      <div className="text-red-500">{icon}</div>
      <p className="text-lg">{text}</p>
    </li>
  );
}
