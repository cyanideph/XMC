'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  BuildingOffice2Icon,
  HomeIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { useParallax } from '../hooks/useParallax'
import { Section } from './Section'
import { ParallaxImage } from './ParallaxImage'
import { fadeIn, slideUp } from '../utils/animations'

export default function LandingPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div ref={ref} className="bg-gray-100">
      {/* Hero Section */}
      <Section className="h-screen flex items-center justify-center relative overflow-hidden">
        <ParallaxImage src="/placeholder.svg?height=1080&width=1920" alt="Construction site" />
        <motion.div
          className="relative z-10 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 className="text-6xl font-bold mb-4" variants={slideUp}>
            XMC Construction
          </motion.h1>
          <motion.p className="text-2xl mb-8" variants={slideUp}>
            Building Dreams in Anahawan, Southern Leyte
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full text-xl transition duration-300 inline-block"
            variants={slideUp}
          >
            Get a Quote
          </motion.a>
        </motion.div>
      </Section>

      {/* About Us Section */}
      <Section className="py-20 bg-white">
        <motion.div className="container mx-auto px-4" style={{ y }}>
          <h2 className="text-5xl font-bold mb-12 text-center">About Us</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            XMC Construction is a premier construction company based in Anahawan, Southern Leyte. With a legacy of
            excellence and a passion for innovation, we transform architectural visions into stunning realities. Our
            team of expert professionals is dedicated to delivering projects that exceed expectations, on time and
            within budget.
          </p>
        </motion.div>
      </Section>

      {/* Services Section */}
      <Section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ServiceCard
              icon={<HomeIcon className="w-16 h-16" />}
              title="Residential Construction"
              description="Crafting homes that reflect your lifestyle and dreams."
            />
            <ServiceCard
              icon={<BuildingOffice2Icon className="w-16 h-16" />}
              title="Commercial Buildings"
              description="Creating spaces that drive business success and growth."
            />
            <ServiceCard
              icon={<TruckIcon className="w-16 h-16" />}
              title="Infrastructure Development"
              description="Building the foundations for thriving communities."
            />
            <ServiceCard
              icon={<WrenchScrewdriverIcon className="w-16 h-16" />}
              title="Renovation & Remodeling"
              description="Breathing new life into existing structures."
            />
          </div>
        </div>
      </Section>

      {/* Projects Showcase */}
      <Section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ProjectCard
              image="/placeholder.svg?height=600&width=800"
              title="Modern Office Complex"
              description="A state-of-the-art office building in the heart of Anahawan."
            />
            <ProjectCard
              image="/placeholder.svg?height=600&width=800"
              title="Luxury Residential Community"
              description="High-end homes with breathtaking views of Southern Leyte."
            />
            <ProjectCard
              image="/placeholder.svg?height=600&width=800"
              title="Shopping Center"
              description="A modern shopping destination for the local community."
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-8">Get in Touch</h3>
              <ul className="space-y-6">
                <ContactItem icon={<PhoneIcon className="w-8 h-8" />} text="+63 123 456 7890" />
                <ContactItem icon={<EnvelopeIcon className="w-8 h-8" />} text="info@xmcconstruction.com" />
                <ContactItem
                  icon={<MapPinIcon className="w-8 h-8" />}
                  text="123 Main Street, Anahawan, Southern Leyte, Philippines"
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
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full text-xl transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
      className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300"
    >
      <div className="text-yellow-500 mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

function ProjectCard({ image, title, description }: { image: string; title: string; description: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeIn}
      className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center">
      <div className="mr-6 text-yellow-500">{icon}</div>
      <span className="text-xl">{text}</span>
    </li>
  )
}
